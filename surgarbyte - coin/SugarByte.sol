// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IOracle.sol";

contract SugarByte is ERC20, Ownable {
    IOracle public priceOracle;

    constructor(address _oracle) ERC20("SugarByte", "SByte") Ownable(msg.sender) {
        priceOracle = IOracle(_oracle);
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function updateOracle(address _oracle) external onlyOwner {
        priceOracle = IOracle(_oracle);
    }

    function getSugarPrice() public view returns (uint256) {
        return priceOracle.getLatestSugarPrice();
    }
}
