import Image from "next/image";
import React from "react";

const ShowCase = () => {
  return (
    <div  >
      <Image
        src="/home/furniture_one_1.png"
        alt="Furniture"
        width={1920}
        height={1020}
        className="w-full  "
      />
    </div>
  );
};

export default ShowCase;
