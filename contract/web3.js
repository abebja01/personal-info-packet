const Web3 = require('web3');

var web3 = new Web3('ws://localhost:8545');
 
    if(web3==undefined){
		web3 = new Web3(web3.currentProvider);
	}else{}
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

module.exports = web3;