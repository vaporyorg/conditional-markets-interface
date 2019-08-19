(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{12:function(module){eval('module.exports = {"contractName":"WETH9","abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.1+commit.c8a2cb62\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"guy\\",\\"type\\":\\"address\\"},{\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"src\\",\\"type\\":\\"address\\"},{\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"withdraw\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"deposit\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"fallback\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"src\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"name\\":\\"guy\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"src\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Deposit\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"name\\":\\"src\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"name\\":\\"wad\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Withdrawal\\",\\"type\\":\\"event\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"canonical-weth/contracts/WETH9.sol\\":\\"WETH9\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"canonical-weth/contracts/WETH9.sol\\":{\\"keccak256\\":\\"0xa8368716f904a049881ea063542136710b8bf5d1178f11ff310c19c3efeae20f\\",\\"urls\\":[\\"bzzr://343680c540f36a6d3d14b69801061e41619da1d6903a1a21e1b9288f73311307\\"]}},\\"version\\":1}","networks":{"1":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c":{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event","signature":"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c"},"0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event","signature":"0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65"}},"links":{},"address":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","transactionHash":"0xb95343413e459a0f97461812111254163ae53467855c0d73e0f1e7c5b8442fa3"},"4":{"events":{"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c":{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event","signature":"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c"},"0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65":{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event","signature":"0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65"}},"links":{},"address":"0xc778417E063141139Fce010982780140Aa0cD5Ab","transactionHash":"0x7bc8e85f99556aa23a41dd3c107e92ec76f057e4cea39f376ffb1b15d514b11f"}}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n')}}]);