const express = require('express');
const app = express.Router();   
const myContract = require('../../contract/contract');
const web3 = require('../../contract/web3'); 
 
 
app.get('/', (req,res)=>{
    res.render('layouts/panel');
});



function addPersonInfo(req,res,next){
    web3.eth.defaultAccount = web3.eth.accounts[0];   
  
    myContract.addPerson(req.body.firstname,req.body.lastname,req.body.birthday,req.body.birthplace,req.body.ssn,req.body.sex,{from: web3.eth.defaultAccount, gas: 1000000},function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            return next();
        }
        
        
       
    })
}

function addFamilyInfo(req,res,next){
    web3.eth.defaultAccount = web3.eth.accounts[0];
    myContract.addFamilyData(req.body.ssn,req.body.firstparent,req.body.secondparent,{from: web3.eth.defaultAccount, gas: 1000000},function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
           
        }
        
        return next();
       
    })
}

function addAddress(req,res,next){
    web3.eth.defaultAccount = web3.eth.accounts[0];
    myContract.addAddress(req.body.ssn,req.body.country,req.body.city,req.body.street,req.body.apt,req.body.zipcode,{from: web3.eth.defaultAccount, gas: 1000000},function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.address = response;
        }
        
        return next();
       
    })
}

function addEducation(req,res,next){
    web3.eth.defaultAccount = web3.eth.accounts[0];
    myContract.addEducation(req.body.ssn,req.body.college,req.body.degree,req.body.major,req.body.gpa,req.body.completed,req.body.enrolled,{from: web3.eth.defaultAccount, gas: 1000000},function(err,response){
        if(err) {
            req.err=err;
        } 
        else{
            req.education = response;
        }
        
        return next();
       
    })
}








app.post('/',addPersonInfo,addAddress,addEducation,addFamilyInfo,(err,res)=>{
    res.render('layouts/home');
}

 )

 module.exports = app;