const {userProfile} = require('../db/MongoDB/index')
const prismaC = require('@prisma/client');
const { hashing,dehashing } = require('../utils/bcryptor');
const prisma = new prismaC.PrismaClient()

const userCreate = async (req,res)=>{
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
        Password:hashedPassword
    }});
    await userProfile.create({
        userID: data.UserID,
        Phone: Phone ? [Phone] : []
        });
    }catch(err){
        console.log('Error in userCreate : \n',err)
        if (err.code === 'P2002') {
            return res.status(409).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const userLoginSearch = async(req,res)=>{
    const {Email,Password}=req.body;
    if(!Email || !Password ){
        return res.status(400).json({"Error":"Field not filled"})
    }
    try{
        const data=await prisma.user.findUnique({
            where:{Email:Email},
            select:{Email:true,Password:true}
        })
        if(!data){
            return res.status(401).json({'message':'Email is not registered'})
        }
        const checkPassword=await dehashing(Password,data.Password)
        if(!checkPassword){
            return res.status(401).json({'message':'Incorrect Password'})
        }
    }catch(err){
        console.log('Error in userLoginSearch : \n',err)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

const deleteAllUser = async(req,res)=>{
    try{
        await prisma.user.deleteMany()
        await userProfile.deleteMany()
    }catch(err){
        console.log('Error in delete all User',err)
    }
}




module.exports={
    userCreate,
    userLoginSearch,
    deleteAllUser
}