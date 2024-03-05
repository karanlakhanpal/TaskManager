import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

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
  };

  return (
    <div className="h-screen w-full bg-[#2980B9] flex justify-center items-center">
      <div className="bg-white p-7 min-w-[400px] rounded-2xl shadow-xl flex flex-col gap-5">
        <div className="mb-5">
          <h1 className="text-black text-4xl font-bold"> Welcome!</h1>
          <p className="text-gray-700 text-lg">Signup to continue</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <input
              className="w-full border border-gray-300  h-11 rounded-md px-2"
              type="text"
              name="fname"
              placeholder="Full Name"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-md px-2"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-md px-2"
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 h-11 rounded-md px-2"
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
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {show && (
              <RotatingLines
                visible={true}
                height="25"
                width="25"
                color="blue"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
