import React, { useState } from "react";
import image from "../../assets/karan.jpg";
import { MdLogout, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <div className="bg-black bg-opacity-80 h-20 p-5 flex flex-row gap-x-3 justify-between">
    //     <div className="flex  items-center">
    //         <h1 className="text-2xl font-bold text-white">Dashboard</h1>
    //     </div>
    //     <div className="flex flex-row gap-x-5">
    //         <div className="flex  items-center">
    //             <ul className='flex flex-row gap-x-5'>
    //                 <li className='text-white hover:underline'><Link to={'#'}>Dashboard</Link></li>
    //                 <li className='text-white hover:underline'><Link to={'#'}>Tasks</Link></li>
    //                 <li className='text-white hover:underline'><Link to={'#'}>Profile</Link></li>
    //                 <li className='text-white hover:underline'><Link to={'#'}>Settings</Link></li>
    //             </ul>
    //         </div>
    //         <div className="flex items-center">
    //             <img
    //                 src={image}
    //                 alt="user logo"
    //                 height={50}
    //                 width={50}
    //                 className="rounded-full"
    //             />
    //         </div>
    //         <div className="flex items-center gap-x-2 border border-1 p-2 rounded border-white">
    //             <MdLogout color="white" size={20} />
    //             <p className='text-white'>Logout</p>
    //         </div>
    //     </div>
    // </div>
    <div className="bg-black bg-opacity-80 p-3 sm:p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          TaskManager
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden">
          <MdMenu color="white" size={30} />
        </button>
        <div className={`flex-row hidden sm:flex`}>
          <ul className="sm:mt-0 flex sm:flex-row sm:gap-x-5">
            <li className="text-white hover:underline mb-2 sm:mb-0">
              <Link to="#">Dashboard</Link>
            </li>
            <li className="text-white hover:underline mb-2 sm:mb-0">
              <Link to="#">Tasks</Link>
            </li>
            <li className="text-white hover:underline mb-2 sm:mb-0">
              <Link to="#">Profile</Link>
            </li>
            <li className="text-white hover:underline mb-2 sm:mb-0">
              <Link to="#">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex ${!menuOpen && "hidden"} sm:hidden`}>
        <ul className="mt-4 flex flex-col">
          <li className="text-white hover:underline mb-2">
            <Link to="#">Dashboard</Link>
          </li>
          <li className="text-white hover:underline mb-2">
            <Link to="#">Tasks</Link>
          </li>
          <li className="text-white hover:underline mb-2">
            <Link to="#">Profile</Link>
          </li>
          <li className="text-white hover:underline mb-2">
            <Link to="#">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
