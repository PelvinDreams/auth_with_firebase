import React, { useEffect, useState } from "react";
import { auth, handleSubmit, handleGoogleLogin } from "../../../Config";


// React Icons
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const App = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormVisible(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 px-4">
      <div
        className={`relative bg-gray-800 text-white shadow-lg rounded-lg p-10 max-w-md w-full
       border border-gray-700 hover:shadow-[0_0_25px_5px_rgba(56,140,248,1)] transition duration-300
       ${
         formVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
       } transform transition-all duration-500
        ease-out`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-gray-400 text-center mb-6">Login to your Account</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={(e) => handleSubmit(e, setError)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-gray-300"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              required
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="mt-1 block w-full p-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-9 right-3 text-xl text-gray-400"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="cursor-pointer" />
              ) : (
                <AiOutlineEye className="cursor-pointer" />
              )}
            </button>
          </div>
          {/* <p className='absolute top-0 right-0 mt-17 mr-2 text-sm text-blue-500 cursor-pointer'>Forgot?</p> */}

          <button
            type="submit"
            className=" w-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-gradient-to-l
           hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 focus:ring focus:ring-cyan-300
            focus:outline-none shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* DIVIDER */}
        <div className=' mt-8 flex items-center justify-between'>
          <span className=' border-b w-1/4 border-gray-600'></span>
          <span className=' text-gray-400 text-sm'>OR</span>
          <span className=' border-b w-1/4 border-gray-600'></span>
        </div>


        {/* GOOGLE BUTTON */}
        <button onClick={() => handleGoogleLogin(setError)} className=' mt-6 w-full cursor-pointer flex items-center justify-center bg-gray-700 border border-gray-600 py-2
         rounded-lg shadow-md hover:bg-gray-600 hover:shadow-lg transition-all duration-300 focus:ring focus:ring-cyan-300
          focus:outline-none'>
          <FcGoogle className='h-6 w-6 mr-3 ' />
          Continue with Google
        </button>

        <p className='text-center text-gray-400 text-sm mt-6'>
          Don't have an account? <a href="/signup" className='text-cyan-400 hover:underline'>Sign up</a>
        </p>
      </div>
    </div>
  )
}
export default App;
