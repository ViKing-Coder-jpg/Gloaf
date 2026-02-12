import img1 from "../assets/Images/cookies.jpg";
import img2 from "../assets/Images/croissant.jpg";
import img3 from "../assets/Images/pizza.jpg";
import axios from 'axios'

export const imageData = [
    {
      imgKey: 1,
      imgSrc: img1,
      imgTitle:
        "Food is not just fuel; it’s an experience that brings people together.",
      imgText:
        "Eating a balanced diet helps improve energy, immunity, and overall well-being.",
    },
    {
      imgKey: 2,
      imgSrc: img2,
      imgTitle: "Good food is the foundation of genuine happiness.",
      imgText:
        "Fresh, locally sourced foods often retain more nutrients and better flavor.",
    },
    {
      imgKey: 3,
      imgSrc: img3,
      imgTitle: "A meal shared is a memory made.",
      imgText:
        "Spices not only add flavor but also offer antioxidant and digestive benefits.",
    },
  ];
export const baseServerURL="http://localhost:8000/api"

export const api = axios.create({
    baseURL: baseServerURL ,
    withCredentials: true 
})

export const foodBannerImage = [
  {
    imgKey: 1,
    imgSrc: img1,
    imgTitle:
      "One bite is all it takes to fall in love with real flavor.",
    imgText:
      "Freshly cooked meals made to satisfy your cravings. Use coupon code FOODIE10 to get 10% off your first order.",
  },
  {
    imgKey: 2,
    imgSrc: img2,
    imgTitle:
      "Because great food makes every moment better.",
    imgText:
      "Indulge in chef-crafted dishes using premium ingredients. Apply coupon TASTY20 and enjoy flat 20% savings today.",
  },
  {
    imgKey: 3,
    imgSrc: img3,
    imgTitle:
      "Craving something delicious? We’ve got you covered.",
    imgText:
      "From comfort food to healthy bowls, there’s something for everyone. Grab your deal with coupon EATMORE15.",
  },
  // {
  //   imgKey: 4,
  //   imgSrc: img4,
  //   imgTitle:
  //     "Good food, good mood — every single time.",
  //   imgText:
  //     "Turn hunger into happiness with our bestselling meals. Use code YUMMY25 and unlock 25% off instantly.",
  // },
]