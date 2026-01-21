import React,{useState} from "react";
import GloafIcon from "../assets/Gloaf_icon.png";
import { FaArrowRight } from "react-icons/fa";
import GoogleIcon from "../assets/Google_icon.png";
import ImageSlider from "../Components/Utilities/ImageSlider";
import { imageData } from "../utils/constants";
import { Link,useNavigate} from "react-router-dom";
import { loginPost } from "../Api/PostApi";




const Login = () => {
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [type,setType]=useState('Customer')

  const navigate=useNavigate()
  const handleSubmit =async(e)=>{
      e.preventDefault();
      const data={
        Email:Email,
        Password:Password,
        type:type,
        accType:"EMAIL"
      }
      try{
        await loginPost(data)
        console.log('Logged in Successfully!')
        type=="Customer"?navigate('/customer/home'):navigate('/partner/home')
      }catch(err){
        console.log('err in signup \n',err)
      }

  }
  const handleGoogleOAuth = async()=>{
        window.location.href="http://localhost:8000/api/auth/google/"
  }

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
            <form className="p-2" onSubmit={handleSubmit}>
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
                    name="Email"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    name="Password"
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)}
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
                    name="type"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
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
                  Or continue as Customer with
                </span>
                <div className="grow h-px bg-[#e2c8b0]" />
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="bg-white border-[#e2c8b0] border h-9 w-80 rounded-md ">
                <button className="h-full w-full text-[#4D2308] font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-[#F1B93D] hover:text-white transition ease-in-out duration-300"
                onClick={handleGoogleOAuth}>
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
