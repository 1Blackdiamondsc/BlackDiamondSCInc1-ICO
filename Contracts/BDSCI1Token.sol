pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract BDSCI1Token is ERC20Mintable {
  string public constant name = "BlackDiamondSCInc1";
  string public constant symbol = "BDSCI1";
  uint8 public constant decimals = 18;
}
