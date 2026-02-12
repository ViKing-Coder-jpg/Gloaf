const { restaurantProfile } = require("../db/MongoDB/index");
const prismaC = require("@prisma/client");
const { hashing } = require("../utils/bcryptor");
const prisma = new prismaC.PrismaClient();

const partnerCreate = async (req, res) => {
  const { Name, Email, Password, Phone } = req.body;
  if (!Name || !Email || !Password) {
    return res.status(400).json({ Error: "Field not filled" });
  }
  try {
    const hashedPassword = await hashing(Password);
    const data = await prisma.restaurant.create({
      data: {
        Name: Name,
        Email: Email,
        Password: hashedPassword,
        Phone: Phone,
      },
    });
    await restaurantProfile.create({
      restaurantID: data.RestaurantID,
    });
  } catch (err) {
    console.log("Error in partnerCreate : \n", err);
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const partnerLoginSearch = async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) {
    return res.status(400).json({ Error: "Field not filled" });
  }
  try {
    const data = await prisma.restaurant.findUnique({
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

const deleteAllPartner = async (req, res) => {
  try {
    await prisma.user.deleteMany();
    await restaurantProfile.deleteMany();
  } catch (err) {
    console.log("Error in delete all User", err);
  }
};

const partnerData=(req,res)=>{
  try{
    
  }catch(err){
    console.log('Error in partnerData',err)
  }
}

module.exports = {
  partnerCreate,
  partnerLoginSearch,
  deleteAllPartner,
};
