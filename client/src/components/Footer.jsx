import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

        <img src={logo} alt="logo" className="w-32" />
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-sm text-white text-center font-medium mt-2">georgiladjov@gmail.com</p>
    </div>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />


  </div>
);

export default Footer;