import React, { useState } from "react";
import Loader from "../Common/Loader";

const SignUp = () => {
  const [formsData, setFormsData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);

  const handleInput = (event) => {
    console.log(event.target);
    console.log(event.target);
  };

  return (
    <div className="h-screen w-full bg-[#2980B9] flex justify-center items-center">
      <div className="bg-white p-7 md:min-w-[450px] rounded-xl shadow-xl flex flex-col gap-4">
        <div className="mb-5">
          <h1 className="text-black text-4xl font-bold mb-1"> Welcome!</h1>
          <p className="text-gray-700 text-md">Signup to continue</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <input
              className="w-full border border-gray-300  h-11 rounded-lg px-2"
              type="text"
              name="fname"
              placeholder="Full Name"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-lg px-2"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-lg px-2"
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-lg px-2"
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setShow(!show);
            }}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center me-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {show ? <Loader text={"Loading..."} showText={true} /> : "Signup"}
          </button>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <p>Already have an account?</p>
          <span className="text-blue-700">Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
