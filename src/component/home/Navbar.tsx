import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="">
        <Image src="/brandicon.png" alt="Brand Icon" width={100} height={100} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Navbar;
