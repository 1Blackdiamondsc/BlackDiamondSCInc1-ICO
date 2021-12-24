const request = require('sync-request')

module.exports = function(callback) {
  const account = web3.personal.newAccount('123456789')
  console.log(`Created AVAX wallet to deploy contracts: ${account} (password is '123456789', don't loose it)`)
  console.log(`Requesting 1 AVAX to ${account} (http://faucet.ropsten.be:3001/donate/${account})`)
  const res = request('GET', `http://faucet.ropsten.be:3001/donate/${account}`)
  if (res.statusCode >= 300) {
    throw new Error('Sorry, Avalanche test faucet request failed: ' + res.body.toString())
  }
  console.log('Requested, waiting on the Avalanche node to sync and then 15 seconds to receive test AVAX...')
  setTimeout(() => {
    checkBalance(account, callback)
  }, 15 * 1000)
}

function checkBalance(account, callback) {
  const balance = web3.avax.getBalance(account)
  if (balance.toNumber() > 0) {
    console.log(`Received 1 test AVAX successfully (balance is ${web3.fromWei(balance, 'avax')} AVAX)`)
    callback()
  } else {
    console.log('Still waiting on 1 test AVAX. Retrying to check balance in 15 seconds...')
    setTimeout(() => {
      checkBalance(account, callback)
    }, 15 * 1000)
  }
}
