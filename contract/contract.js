const web3 = require('./web3');
const contractAdress = require('../config').contractAddress;

var contract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_country",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_street",
				"type": "string"
			},
			{
				"name": "_apt",
				"type": "string"
			},
			{
				"name": "_zipCode",
				"type": "string"
			}
		],
		"name": "addAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_college",
				"type": "string"
			},
			{
				"name": "_bachelorType",
				"type": "string"
			},
			{
				"name": "_major",
				"type": "string"
			},
			{
				"name": "_gpa",
				"type": "string"
			},
			{
				"name": "_isCompleted",
				"type": "bool"
			},
			{
				"name": "_isEnrolled",
				"type": "bool"
			}
		],
		"name": "addEducation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_father",
				"type": "string"
			},
			{
				"name": "_mother",
				"type": "string"
			}
		],
		"name": "addFamilyData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_lName",
				"type": "string"
			},
			{
				"name": "_dateOfBirth",
				"type": "string"
			},
			{
				"name": "_placeOfBirth",
				"type": "string"
			},
			{
				"name": "_ssn",
				"type": "string"
			},
			{
				"name": "_sex",
				"type": "string"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getEducation",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getFamily",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ssn",
				"type": "string"
			}
		],
		"name": "getPerson",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peopleData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
var myContract = contract.at(contractAdress);
web3.eth.defaultAccount = web3.eth.accounts[0]; // specify the account , ideally the account in an dApp application should change and be an input for the user so they can use their own account

module.exports = myContract;
