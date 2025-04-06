// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IOracle.sol";

contract MockSugarOracle is IOracle {
    uint256 private sugarPrice;

    constructor(uint256 _initialPrice) {
        sugarPrice = _initialPrice;
    }

    function setSugarPrice(uint256 _price) external {
        sugarPrice = _price;
    }

    function getLatestSugarPrice() external view override returns (uint256) {
        return sugarPrice;
    }
}
