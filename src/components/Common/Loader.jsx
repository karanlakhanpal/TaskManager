import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ text, showText }) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      <RotatingLines
        visible={true}
        height="25"
        width="25"
        strokeWidth="4"
        strokeColor="white"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
      {showText && text}
    </div>
  );
};

export default Loader;
