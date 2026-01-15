const {userProfile} = require('../db/MongoDB/index')
const prismaC = require('@prisma/client');
const { hashing } = require('../utils/bcryptor');
const prisma = new prismaC.PrismaClient()

const partnerCreate = async (req,res)=>{
    const {Name,Email,Password,Phone}=req.body;
    if(!Name || !Email ||  !Password){
        return res.status(400).json({"Error":"Field not filled"})
    }
    try{
    const hashedPassword = await hashing(Password);
    const data=await prisma.user.create({data:{
        Name:Name,
        Email:Email,
        Password:hashedPassword,
        Phone:Phone
    }});
    await userProfile.create({
        restaurantID: data.UserID,
        });
    }catch(err){
        console.log('Error in partnerCreate : \n',err)
        if (err.code === 'P2002') {
            return res.status(409).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}








module.exports={
    partnerCreate
}