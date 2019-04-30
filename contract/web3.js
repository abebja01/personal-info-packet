const Web3 = require('web3');
const httpProvAddress = require('../config').httpProvAddress;

var web3 = new Web3(httpProvAddress); // address where the provider can be accesed from 
 
    if(web3==undefined){
		web3 = new Web3(web3.currentProvider);
	}else{}
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(httpProvAddress));

module.exports = web3;