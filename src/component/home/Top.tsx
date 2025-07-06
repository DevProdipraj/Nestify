import React from "react";
import { FiPhone } from "react-icons/fi";
const Top = () => {
  return (
    <div className="bg-dark text-gray-300 ">
      <div className="container flex items-center justify-between py-2">
        <div className=" flex items-center">
          <p>
            Welcome To Our Store <strong>Nestify</strong>
          </p>
          <div className="">
            <div className=" flex items-center">
              <FiPhone className="text-primary" />
              <p> Call Us : +008 01785427890</p>
            </div>
          </div>
        </div>
        <div className="">phone</div>
      </div>
    </div>
  );
};

export default Top;
