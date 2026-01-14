const {userProfile} = require('../db/MongoDB/index')
const prismaC = require('@prisma/client');
const { hashing } = require('../utils/bcryptor');
const prisma = new prismaC.PrismaClient()

const partnerCreate = async (req,res)=>{
    const {Name,Email,accType,Password,Phone}=req.body;
    if(!Name || !Email || (accType=="EMAIL" && !Password)){
        return res.status(400).json({"Error":"Field not filled"})
    }
    try{
    let hashedPassword = null;
    if (accType == "EMAIL") {
        hashedPassword = await hashing(Password);
    }
    const data=await prisma.user.create({data:{
        Name:Name,
        Email:Email,
        accType:accType,
        Password:hashedPassword,
        Phone:Phone
    }});
    await userProfile.create({
        restaurantID: data.UserID,
        });
    res.status(201).json({"message":"Restaurant was Created Successfully"});
    }catch(err){
        console.log('Error in userCreate : \n',err)
        if (err.code === 'P2002') {
            return res.status(409).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}








module.exports={
    partnerCreate
}