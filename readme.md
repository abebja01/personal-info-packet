 ## Overview

  * This is a simple dApp that runs on the Ethereum network and makes use of smart contracts. The purpose of this app is to create a personal id for users that can be accessed by one`s social security card. The idea behind this application is that, the same way this smart contract is set up people can choose to store different types of data by modifying the smart contract. People can store college records, medical records. In this case this application for demostration purposes only stores general information about the person. It is to be considered that sensitive data must have an extra layer of security, which could be done via an encrypting function in the server side of the application , that would encrypt in data insertion into the blockchain and decrypt upon reading.

### Folders in Repository

* ### /assets
	* Contains css files and images that are used in this project

* ### /contract
	* /contract.js --> specifies the contract and exports it for use
    * /web3.js --> sets up web3 object and exports it for use

* ### /routes
	* /routes.js --> set up controller routes
    * /controllers --> contains controllers for dashboard , home and panel layouts ( get and post requests)

* ### /views
	* layouts/dashboard.ejs  --> layout rendered by /routes/controllers/dashboard.js controller
    * layouts/home.ejs       --> layout rendered by /routes/controllers/home.js controller
    * layouts/panel.ejs      --> layout rendered by /routes/controllers/panel.js controller


### Application Type

 * These app is developed using Node version 8.11.1
 * Tested using ganache-cli 
 * Packages used are listed under 'dependencies' in ./package.json

 

### Error Logging

- The infrastructure for error logging exists in the controllers, but when an error occurs the application just throws it. There are a lot of ways to deal with 
  errors such as logging the error to a database log collection and handling it so the website does not crash. The purpose of this project was to mostly play with Ethereum smart
  contracts and see how they work and behave in the Ethereum network.

 
### Run Application ( make sure the config file is configured)

 * npm start

   