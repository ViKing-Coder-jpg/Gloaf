const express =require('express')
const {userCreate,deleteAllUser}=require('./user.controllers.js')
const {partnerCreate,deleteAllPartner}=require('./partner.controllers.js')
const {jwtsign}=require('../utils/oauth.js')



const options={
    httpOnly:true,
    secure:true
}
const signupSSO = async (req,res) =>{
    const {type}=req.body
    try{
    if(type=='Customer'){
        await userCreate(req,res);
        const acessToken=await jwtsign(req,res,'1h','a');
        const refreshToken=await jwtsign(req,res,'5d','r');
        res.status(201).cookie('acessToken',acessToken,options).cookie('refreshToken',refreshToken,options).json({'message':'Customer was created Successfully'})
        
    }else{
        await partnerCreate(req,res);
        const acessToken=await jwtsign(req,res,'1h','a');
        const refreshToken=await jwtsign(req,res,'5d','r');
        res.status(201).cookie('acessToken',acessToken,options).cookie('refreshToken',refreshToken,options).json({'message':'Restaurant was created Successfully'})
    }}catch(err){
        console.log('Error in signupSSO controller',err)
    }
}

const deleteAllSSO = async(req,res)=>{
    await deleteAllPartner(req,res);
    await deleteAllUser(req,res);
    res.status(205).json({'message':'Data was erased successfully'})
}

module.exports={
    signupSSO,
    deleteAllSSO

}