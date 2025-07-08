import Image from "next/image";
import React from "react";

const TopProduct = () => {
  const images = [
    {
      id: 1,
      img: "/home/furniture_one_3.png",
    },
    {
      id: 2,
      img: "/home/furniture_one_4.png",
    },
    {
      id: 3,
      img: "/home/furniture_one_5.png",
    },
  ];

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7 lg:mt-10">
          {images.map((item) => (
            <div key={item.id} className="">
              <Image
                src={item.img}  // Fixed: Use item.img instead of images.img
                alt="Furniture Image"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct; 