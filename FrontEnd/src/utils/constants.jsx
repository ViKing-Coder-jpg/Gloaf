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


export const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true 
})