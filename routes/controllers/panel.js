const express = require('express');
const app = express.Router();   
const myContract = require('../../contract/contract');
const web3 = require('../../contract/web3'); 
const gasAmount = require('../../config').gasAmount;
 
app.get('/', (req,res)=>{
    res.render('layouts/panel');
});



function addPersonInfo(req,res,next){
    
    var lastname = req.body.lastname+"";
    var dob = req.body.dob+"";
    var birthplace =req.body.birthplace+"";
    var ssn =req.body.ssn+"";
    var gender =req.body.sex+"";
    var firstname = req.body.firstname+"";

    myContract.addPerson(firstname,lastname,dob,birthplace,ssn,gender,{from: web3.eth.defaultAccount, gas: gasAmount});
       
    return next();
   
  
}
 
       


function addFamilyInfo(req,res,next){
    
    var ssn = req.body.ssn;
    var firstparent = req.body.firstparent;
    var secondparent = req.body.secondparent;
    myContract.addFamilyData(ssn,firstparent,secondparent,{from: web3.eth.defaultAccount, gas: gasAmount});
    return next();
       
    
}

function addAddress(req,res,next){
   
    var ssn = req.body.ssn;
    var country = req.body.country;
    var city = req.body.city;
    var street = req.body.street;
    var apt = req.body.apt;
    var zipcode = req.body.zipcode;
    myContract.addAddress(ssn,country,city,street,apt,zipcode,{from: web3.eth.defaultAccount, gas: gasAmount});
        
    return next();
       
    
}

function addEducation(req,res,next){
     
    var ssn = req.body.ssn;
    var college = req.body.college;
    var degree = req.body.degree;
    var major = req.body.major;
    var gpa = req.body.gpa;
    var completed = req.body.completed;
    var enrolled = req.body.enrolled;
    myContract.addEducation(ssn,college,degree,major,gpa,completed,enrolled,{from: web3.eth.defaultAccount, gas: gasAmount});
    return next();
}



app.post('/',addPersonInfo,addAddress,addEducation,addFamilyInfo,(err,res)=>{
    res.render('layouts/home');
}

 )

 module.exports = app;