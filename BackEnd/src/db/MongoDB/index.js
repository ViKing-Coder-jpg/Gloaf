const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cartSchema = new mongoose.Schema(
  {
    userID: Number,
    restaurantID: Number,
    items: [
      {
        menuItemID: Number,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);
const cart = mongoose.model("Cart", cartSchema);

const userSchema = new mongoose.Schema({
  userID: Number,
  Phone:{type:[Number]},
  address: [
    {
      label: String,
      street: String,
      City: String,
      Pincode: Number,
      geoLocation: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },
        coordinates: {
          type: [Number],
          index: "2dsphere",
        },
      },
    },
  ],
});
const userProfile = mongoose.model("userProfile", userSchema);

const restaurantSchema = new mongoose.Schema({
  restaurantID: Number,
  menu: [{ menuItemID: Number, name: String, price: Number, imageURL: String , tag:String}],
  rating: {
    average: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    count: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  geoLocation: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], 
      index: "2dsphere",
    },
  },
});
const restaurantProfile = mongoose.model("restaurantProfile", restaurantSchema);
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_DEV);
    console.log("MongoDB is Connected !!!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  connection,
  cart,
  userProfile,
  restaurantProfile,
};
