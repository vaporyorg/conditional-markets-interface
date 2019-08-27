(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{35:function(module){eval('module.exports = {"contractName":"LMSRMarketMaker","abi":[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pmSystem","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isERC1155TokenReceiver","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"outcomeTokenAmounts","type":"int256[]"},{"name":"collateralLimit","type":"int256"}],"name":"trade","outputs":[{"name":"netCost","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"close","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawFees","outputs":[{"name":"fees","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fundingChange","type":"int256"}],"name":"changeFunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"outcomeTokenCost","type":"uint256"}],"name":"calcMarketFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collateralToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"funding","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"conditionIds","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"atomicOutcomeSlotCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint64"}],"name":"changeFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"FEE_RANGE","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_pmSystem","type":"address"},{"name":"_collateralToken","type":"address"},{"name":"_conditionIds","type":"bytes32[]"},{"name":"_fee","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"initialFunding","type":"uint256"}],"name":"AMMCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"AMMPaused","type":"event"},{"anonymous":false,"inputs":[],"name":"AMMResumed","type":"event"},{"anonymous":false,"inputs":[],"name":"AMMClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fundingChange","type":"int256"}],"name":"AMMFundingChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newFee","type":"uint64"}],"name":"AMMFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fees","type":"uint256"}],"name":"AMMFeeWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactor","type":"address"},{"indexed":false,"name":"outcomeTokenAmounts","type":"int256[]"},{"indexed":false,"name":"outcomeTokenNetCost","type":"int256"},{"indexed":false,"name":"marketFees","type":"uint256"}],"name":"AMMOutcomeTokenTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"name":"outcomeTokenAmounts","type":"int256[]"}],"name":"calcNetCost","outputs":[{"name":"netCost","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"outcomeTokenIndex","type":"uint8"}],"name":"calcMarginalPrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.1+commit.c8a2cb62\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"resume\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"pmSystem\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"isERC1155TokenReceiver\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bytes4\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"outcomeTokenAmounts\\",\\"type\\":\\"int256[]\\"},{\\"name\\":\\"collateralLimit\\",\\"type\\":\\"int256\\"}],\\"name\\":\\"trade\\",\\"outputs\\":[{\\"name\\":\\"netCost\\",\\"type\\":\\"int256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"close\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"withdrawFees\\",\\"outputs\\":[{\\"name\\":\\"fees\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"renounceOwnership\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"outcomeTokenAmounts\\",\\"type\\":\\"int256[]\\"}],\\"name\\":\\"calcNetCost\\",\\"outputs\\":[{\\"name\\":\\"netCost\\",\\"type\\":\\"int256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"pause\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"fundingChange\\",\\"type\\":\\"int256\\"}],\\"name\\":\\"changeFunding\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"isOwner\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"outcomeTokenCost\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"calcMarketFee\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"collateralToken\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"outcomeTokenIndex\\",\\"type\\":\\"uint8\\"}],\\"name\\":\\"calcMarginalPrice\\",\\"outputs\\":[{\\"name\\":\\"price\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_operator\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256[]\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256[]\\"},{\\"name\\":\\"\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"onERC1155BatchReceived\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bytes4\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"stage\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"funding\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"conditionIds\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bytes32\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"atomicOutcomeSlotCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"fee\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint64\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"_fee\\",\\"type\\":\\"uint64\\"}],\\"name\\":\\"changeFee\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"onERC1155Received\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bytes4\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"FEE_RANGE\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint64\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"_pmSystem\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_collateralToken\\",\\"type\\":\\"address\\"},{\\"name\\":\\"_conditionIds\\",\\"type\\":\\"bytes32[]\\"},{\\"name\\":\\"_fee\\",\\"type\\":\\"uint64\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"initialFunding\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"AMMCreated\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[],\\"name\\":\\"AMMPaused\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[],\\"name\\":\\"AMMResumed\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[],\\"name\\":\\"AMMClosed\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"fundingChange\\",\\"type\\":\\"int256\\"}],\\"name\\":\\"AMMFundingChanged\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"newFee\\",\\"type\\":\\"uint64\\"}],\\"name\\":\\"AMMFeeChanged\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"name\\":\\"fees\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"AMMFeeWithdrawal\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"transactor\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"outcomeTokenAmounts\\",\\"type\\":\\"int256[]\\"},{\\"indexed\\":false,\\"name\\":\\"outcomeTokenNetCost\\",\\"type\\":\\"int256\\"},{\\"indexed\\":false,\\"name\\":\\"marketFees\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"AMMOutcomeTokenTrade\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"previousOwner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"}],\\"devdoc\\":{\\"author\\":\\"Alan Lu - <alan.lu@gnosis.pm>\\",\\"methods\\":{\\"calcMarginalPrice(uint8)\\":{\\"details\\":\\"Returns marginal price of an outcome\\",\\"params\\":{\\"outcomeTokenIndex\\":\\"Index of outcome to determine marginal price of\\"},\\"return\\":\\"Marginal price of an outcome as a fixed point number\\"},\\"calcMarketFee(uint256)\\":{\\"details\\":\\"Calculates fee to be paid to market maker\\",\\"params\\":{\\"outcomeTokenCost\\":\\"Cost for buying outcome tokens\\"},\\"return\\":\\"Fee for trade\\"},\\"calcNetCost(int256[])\\":{\\"details\\":\\"Calculates the net cost for executing a given trade.\\",\\"params\\":{\\"outcomeTokenAmounts\\":\\"Amounts of outcome tokens to buy from the market. If an amount is negative, represents an amount to sell to the market.\\"},\\"return\\":\\"Net cost of trade. If positive, represents amount of collateral which would be paid to the market for the trade. If negative, represents amount of collateral which would be received from the market for the trade.\\"},\\"changeFunding(int256)\\":{\\"details\\":\\"Allows to fund the market with collateral tokens converting them into outcome tokens Note for the future: should combine splitPosition and mergePositions into one function, as code duplication causes things like this to happen.\\"},\\"close()\\":{\\"details\\":\\"Allows market owner to close the markets by transferring all remaining outcome tokens to the owner\\"},\\"isOwner()\\":{\\"details\\":\\"Returns true if the caller is the current owner.\\"},\\"owner()\\":{\\"details\\":\\"Returns the address of the current owner.\\"},\\"renounceOwnership()\\":{\\"details\\":\\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\\"},\\"trade(int256[],int256)\\":{\\"details\\":\\"Allows to trade outcome tokens and collateral with the market maker\\",\\"params\\":{\\"collateralLimit\\":\\"If positive, this is the limit for the amount of collateral tokens which will be sent to the market to conduct the trade. If negative, this is the minimum amount of collateral tokens which will be received from the market for the trade. If zero, there is no limit.\\",\\"outcomeTokenAmounts\\":\\"Amounts of each atomic outcome token to buy or sell. If positive, will buy this amount of outcome token from the market. If negative, will sell this amount back to the market instead. The indices of this array range from 0 to product(all conditions\' outcomeSlotCounts)-1. For example, with two conditions with three outcome slots each and one condition with two outcome slots, you will have 3*3*2=18 total atomic outcome tokens, and the indices will range from 0 to 17. The indices map to atomic outcome slots depending on the order of the conditionIds. Let\'s say the first condition has slots A, B, C the second has slots X, Y, and the third has slots I, J, K. We can associate each atomic outcome token with indices by this map: A&X&I == 0 B&X&I == 1 C&X&I == 2 A&Y&I == 3 B&Y&I == 4 C&Y&I == 5 A&X&J == 6 B&X&J == 7 C&X&J == 8 A&Y&J == 9 B&Y&J == 10 C&Y&J == 11 A&X&K == 12 B&X&K == 13 C&X&K == 14 A&Y&K == 15 B&Y&K == 16 C&Y&K == 17 This order is calculated via the generateAtomicPositionId function below: C&Y&I -> (2, 1, 0) -> 2 + 3 * (1 + 2 * (0 + 3 * (0 + 0)))\\"},\\"return\\":\\"If positive, the amount of collateral sent to the market. If negative, the amount of collateral received from the market. If zero, no collateral was sent or received.\\"},\\"transferOwnership(address)\\":{\\"details\\":\\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\\"},\\"withdrawFees()\\":{\\"details\\":\\"Allows market owner to withdraw fees generated by trades\\",\\"return\\":\\"Fee amount\\"}},\\"title\\":\\"LMSR market maker contract - Calculates share prices based on share distribution and initial funding\\"},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"@gnosis.pm/hg-market-makers/contracts/LMSRMarketMaker.sol\\":\\"LMSRMarketMaker\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@gnosis.pm/hg-contracts/contracts/ERC1155/ERC1155.sol\\":{\\"keccak256\\":\\"0x10343cd2da9bec10446451aa4f5fefc2fdd01f691d279b71e2f806f3a25c6b3d\\",\\"urls\\":[\\"bzzr://a76eaacc5082f5f83f6bf8f2a44eca80761551e2c119e2013944535ef7c87e30\\"]},\\"@gnosis.pm/hg-contracts/contracts/ERC1155/IERC1155.sol\\":{\\"keccak256\\":\\"0x4971631d7de74464fed3e0abac04553e917be5e8cd10b3f825e2e7c39ccc2734\\",\\"urls\\":[\\"bzzr://e1e88dfe7440ceab59d4cd604d12e5dc93409a3c5058e497763703027ea7b9e6\\"]},\\"@gnosis.pm/hg-contracts/contracts/ERC1155/IERC1155TokenReceiver.sol\\":{\\"keccak256\\":\\"0x675eaf04410e936cbd50325aa661216666214ca89f113b0880b917e3d00dda26\\",\\"urls\\":[\\"bzzr://e6d4db28e3180f99029df28a1df07988e1d313d6981725ec22af84f799ccdf6a\\"]},\\"@gnosis.pm/hg-contracts/contracts/ERC1820Registry.sol\\":{\\"keccak256\\":\\"0x5a98e0985b1c43c8fe355ea4ca5d2f434ffbf24c8b77bf0c1a0b405fbd728dee\\",\\"urls\\":[\\"bzzr://15b63f9b61ed5c19993149654f5bdc1a71909973f510fa858d094a2dae9af512\\"]},\\"@gnosis.pm/hg-contracts/contracts/OracleConsumer.sol\\":{\\"keccak256\\":\\"0xf54ac4060959a5e1c1714933711c90cd62bbbf127d5e37dc6cbcbb3711b3c186\\",\\"urls\\":[\\"bzzr://2efcd8089b7f032f4cc05e4a00304eb01bad0edbc43388332c79b010df532ffc\\"]},\\"@gnosis.pm/hg-contracts/contracts/PredictionMarketSystem.sol\\":{\\"keccak256\\":\\"0x18e0ce1f7e728a9f38b1d309bd3a44e5b988779131922d6b85777582d8222e6f\\",\\"urls\\":[\\"bzzr://d55af5598b18264cc1b02beee0f2123f8f27e6cea3f6cc0b3a6d34246bfc5542\\"]},\\"@gnosis.pm/hg-market-makers/contracts/LMSRMarketMaker.sol\\":{\\"keccak256\\":\\"0xaad4725db9faedb86fccc0e6f729820231442efc1892581a8b9c87ac26a786f0\\",\\"urls\\":[\\"bzzr://37f7880b86909118c21ac949378427e46a08ca7fd0f8d98b2a4ac3e319d31dcd\\"]},\\"@gnosis.pm/hg-market-makers/contracts/MarketMaker.sol\\":{\\"keccak256\\":\\"0x7aeaabd7712fef5210882d75cfac432260cb8928ffe0ae80009b26e78dae5796\\",\\"urls\\":[\\"bzzr://e6090760a1d8da6380de002417467473df67065e4b960b278a8be8ac50df7183\\"]},\\"@gnosis.pm/util-contracts/contracts/Fixed192x64Math.sol\\":{\\"keccak256\\":\\"0xad15b641bf8f5862034749b679ab91cb2c330c2ca997da4455863dc169ab82d4\\",\\"urls\\":[\\"bzzr://a37b3d23f367b7f0ba4669c417af754260f0dbedad21294079aed622222427f5\\"]},\\"@gnosis.pm/util-contracts/contracts/SignedSafeMath.sol\\":{\\"keccak256\\":\\"0xf96e8d30ae216bdded12e0330bd43258ff91d7f2e197ba51cd0bebe662b2abbb\\",\\"urls\\":[\\"bzzr://7693c86096ea689f6cf2a2a5a5e7247e1bb7bc3d6573e1d3044a94f6c8082544\\"]},\\"openzeppelin-solidity/contracts/introspection/ERC165.sol\\":{\\"keccak256\\":\\"0xac2eacd7e7762e275442f28f21d821544df5aae2ed7698af13be8c41b7005e2e\\",\\"urls\\":[\\"bzzr://43e901f6f210568ebc1d3591da3ce6a9d10796b854767a9c6e3da10305a8a332\\"]},\\"openzeppelin-solidity/contracts/introspection/IERC165.sol\\":{\\"keccak256\\":\\"0x661553e43d7c4fbb2de504e5999fd5c104d367488350ed5bf023031bd1ba5ac5\\",\\"urls\\":[\\"bzzr://fc2ba15143ce3a00268ecd15fc98eb2469b18bfe27a64bbab0ac6446f161c739\\"]},\\"openzeppelin-solidity/contracts/math/SafeMath.sol\\":{\\"keccak256\\":\\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\\",\\"urls\\":[\\"bzzr://1604f5b6d6e916c154efd8c6720cda069e5ba32dfa0a9dedf2b42e5b02d07f89\\"]},\\"openzeppelin-solidity/contracts/ownership/Ownable.sol\\":{\\"keccak256\\":\\"0xf79fb10e8235770eb4aea7249034076a3cc9f9119ad944fc48705bae9c9d20dc\\",\\"urls\\":[\\"bzzr://d12a11272051eb6586de8f7e0a82c04a98c9984ce8b2a6cf1ee439f65aba29a9\\"]},\\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\\":{\\"keccak256\\":\\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\\",\\"urls\\":[\\"bzzr://aa8b45b57edafc3d67bc5d916327ea16807fae33f753ca163ae0c4061b789766\\"]},\\"openzeppelin-solidity/contracts/utils/Address.sol\\":{\\"keccak256\\":\\"0xf3358e5819ca73357abd6c90bdfffd0474af54364897f6b3e3234c4b71fbe9a1\\",\\"urls\\":[\\"bzzr://f7f6da60a184233fd666ac44e6fb2bd51ca6ebdc4867a310d368049aa4e62786\\"]}},\\"version\\":1}","networks":{}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzNS5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n')}}]);