const {userProfile} = require('../db/MongoDB/index')
const prismaC = require('@prisma/client');
const { hashing } = require('../utils/bcryptor');
const prisma = new prismaC.PrismaClient()

const userCreate = async (req,res)=>{
    const {Name,Email,accType,Password}=req.body;
    if(!Name || !Email || (accType=="EMAIL" && !Password)){
        return res.status(400).json({"Error":"Field not filled"})
    }
    try{
    const hashedPassword= hashing(Password)
    const data=await prisma.user.create({data:{
        Name:Name,
        Email:Email,
        accType:accType,
        Password:hashedPassword
    }});
    await userProfile.create({
        userID:data.UserID,     
    });
    res.status(201).json({"message":"User was Created Successfully"});
    }catch(err){
        console.log('Error in userCreate : \n',err)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}








module.exports={
    userCreate
}