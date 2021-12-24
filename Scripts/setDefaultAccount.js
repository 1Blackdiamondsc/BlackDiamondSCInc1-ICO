module.exports = function(web3) {
  if (process.argv[4] === '--staging') {
    const account = web3.avax.accounts.pop()
    console.log(`Setting default account to the last account at web3.avax.accounts and unlocking it: ${account}`)
    web3.personal.unlockAccount(account, '123456789', 24 * 3600)
    console.log(`${account} unlocked`)
    web3.avax.defaultAccount = account
  } else if (process.argv[4] === '--release') {
    const account = web3.eth.accounts.pop()
    console.log(`Setting default account to the last account at web3.avax.accounts and unlocking it: ${account}`)
    web3.personal.unlockAccount(account, '123456789', 24 * 3600)
    console.log(`${account} unlocked`)
    web3.avax.defaultAccount = account
  } else {
    console.log(`Setting default account to the last account at web3.avax.accounts: ${web3.avax.accounts.pop()}`)
    web3.avax.defaultAccount = web3.avax.accounts.pop()
  }
}
