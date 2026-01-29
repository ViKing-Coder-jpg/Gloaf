const { userProfile } = require("../db/MongoDB/index");
const prismaC = require("@prisma/client");
const { hashing, dehashing } = require("../utils/bcryptor");
const prisma = new prismaC.PrismaClient();

const userCreate = async (req, res) => {
  const { Name, Email, accType, Password, Phone } = req.body;
  if (!Name || !Email || (accType == "EMAIL" && !Password)) {
    return res.status(400).json({ Error: "Field not filled" });
  }
  try {
    let hashedPassword = null;
    if (accType == "EMAIL") {
      hashedPassword = await hashing(Password);
    }
    const data = await prisma.user.create({
      data: {
        Name: Name,
        Email: Email,
        accType: accType,
        Password: hashedPassword,
      },
    });
    await userProfile.create({
      userID: data.UserID,
      Phone: Phone ? [Phone] : [],
    });
  } catch (err) {
    console.log("Error in userCreate : \n", err);
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const userLoginSearch = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ Error: "Field not filled" });
  }
  try {
    const data = await prisma.user.findUnique({
      where: { Email: Email },
      select: { Email: true, Password: true },
    });
    if (!data) {
      return res.status(401).json({ message: "Email is not registered" });
    }
    const checkPassword = await dehashing(Password, data.Password);
    if (!checkPassword) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (err) {
    console.log("Error in userLoginSearch : \n", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAllUser = async (req, res) => {
  try {
    await prisma.user.deleteMany();
    await userProfile.deleteMany();
  } catch (err) {
    console.log("Error in delete all User", err);
  }
};

const userFindOrCreateGoogle = async (profile) => {
  try {
    const findUser = await prisma.user.findUnique({
      where: { Email: profile.emails[0].value, accType: "GOOGLE" },
    });
    if (!findUser) {
      const data = await prisma.user.create({
        data: {
          Name: profile.displayName,
          Email: profile.emails[0].value,
          accType: "GOOGLE",
        },
      });
      await userProfile.create({
        userID: data.UserID,
      });
    }
    return findUser?findUser:await prisma.user.findUnique({where: { Email: profile.emails[0].value, accType: "GOOGLE" },});
  } catch (error) {
    console.log("Error in Google create Or Find", error);
  }
};
const findUserData = async (UserId,{Name,Email,Phone,address},req,res) =>{
  if(Name){
    const data= prisma.user.findUnique({
      where:{UserId:UserId},
      select:{Name:Name}
    },)
    return res.status(200).json({data:data})
  }
  if(Email){
    const data= prisma.user.findUnique({
      where:{UserId:UserId},
      select:{Email:Email}
    },)
    return res.status(200).json({data:data})
  }
  if(Phone){
    const data= userProfile.findOne({UserId:UserId})
    return res.status(200).json({data:data})
  }
}

module.exports = {
  userCreate,
  userLoginSearch,
  deleteAllUser,
  userFindOrCreateGoogle,
};
