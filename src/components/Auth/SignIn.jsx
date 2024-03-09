import React, { useState } from "react";
import Loader from "../Common/Loader";

const SignIn = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen w-full bg-[#2980B9] flex justify-center items-center">
      <div className="bg-white p-7 min-w-[400px] rounded-2xl shadow-xl flex flex-col gap-5">
        <div className="mb-5">
          <h1 className="text-black text-3xl font-bold"> Welcome!</h1>
          <p className="text-gray-700 text-lg">Login here</p>
        </div>
        <div className="flex flex-col gap-4">
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
              placeholder="Password"
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
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {show ? (
              <div className="flex flex-row gap-2 justify-center items-center">
                <Loader text={'Loading...'} showText={true} />
              </div>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center ">
          <p>Don't have an account?</p>
          <span className="text-blue-700">Signup</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
