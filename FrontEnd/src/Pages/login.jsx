import React from "react";
import GloafIcon from "../assets/Gloaf_icon.png";
import { FaArrowRight } from "react-icons/fa";
import GoogleIcon from "../assets/Google_icon.png";
import ImageSlider from "../Components/Utilities/ImageSlider";
import img1 from "../assets/Images/cookies.jpg";
import img2 from "../assets/Images/croissant.jpg";
import img3 from "../assets/Images/pizza.jpg";
import { Link } from "react-router-dom";


const Login = () => {
  const imageData = [
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
  return (
    <div className="bg-amber-300 h-screen m-0 p-0 flex flex-row font-[Poppins, sans-serif]">
      <div className="w-[55vw] m-0">
        <ImageSlider imgData={imageData} />
      </div>
      <div className="bg-[#F3CEA2] w-[45vw] m-0 px-15 py-18">
        <div className="bg-[#fffbf2] h-full rounded-[25px] m-0 p-5 flex justify-center flex-col shadow-lg">
          <div className="h-[35vh] m-0 text-[#4D2308] flex flex-col items-center justify-around  p-1">
            <div className="flex justify-between">
              <img
                src={GloafIcon}
                alt="Gloaf icon"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl">Gloaf</h3>
            </div>
            <h2 className="font-semibold text-3xl">Join Gloaf</h2>
            <p className="text-sm text-[#996842]">Good Food Starts Here.</p>
          </div>
          <div className="h-[40vh] m-0">
            <form className="p-2">
              <div className="space-y-4 flex flex-col justify-evenly">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-[#4D2308]"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    id="Email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-[#4D2308]"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    id="Password"
                    placeholder="Enter your password"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="Role"
                    className="block text-sm font-medium text-[#4D2308]"
                  >
                    Sign in as :
                  </label>
                  <select
                    id="Role"
                    name="role"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    defaultValue="customer"
                  >
                    <option value="customer">Customer</option>
                    <option value="restaurant">Restaurant</option>
                  </select>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-[#F1B93D] h-9 w-80 rounded-md text-[#4D2308]  hover:text-white transition ease-in-out duration-300">
                    <button
                      type="submit"
                      className="h-full w-full font-medium flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Sign in</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="h-[40vh] m-0">
            <div>
              <div className="flex items-center my-6">
                <div className="grow h-px bg-[#e2c8b0]" />
                <span className="px-4 text-sm text-[#a67c52] whitespace-nowrap">
                  Or continue with
                </span>
                <div className="grow h-px bg-[#e2c8b0]" />
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="bg-white border-[#e2c8b0] border h-9 w-80 rounded-md ">
                <button className="h-full w-full text-[#4D2308] font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-[#F1B93D] hover:text-white transition ease-in-out duration-300">
                  <img
                    src={GoogleIcon}
                    alt="Google_Icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>Google</span>
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-center m-2 p-2 text-[#4D2308] text-sm">
              <div>
                Don't have an account?
                <Link to='/signup'>
                <span className="text-[#bd702d] font-medium cursor-pointer">
                  {" "}
                  Sign up
                </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
