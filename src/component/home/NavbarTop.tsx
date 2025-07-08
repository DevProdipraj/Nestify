import React from "react";
import { FiPhone } from "react-icons/fi";
const NavbarTop = () => {
  return (
    <div className="bg-dark text-gray-300 ">
      <div className="container   flex items-center justify-end md:justify-between py-2">
        <div className=" hidden md:block md:mx-6">
        <div className=" flex items-center text-sm">
          <p className="text-neutral">
            Welcome To Our Store <strong>Nestify</strong>
          </p>
          <div className="ms-8">
            <div className=" flex items-center">
              <FiPhone className="text-primary" />
              <p className="ms-2.5 text-neutral">
                {" "}
                Call Us : +008 01785-427890
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="">
          <div className="">
            <select className="       ">
              <option className="bg- bg-gray-700 text-white">English</option>
              <option className="bg- bg-gray-700 text-white">Bangla</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
