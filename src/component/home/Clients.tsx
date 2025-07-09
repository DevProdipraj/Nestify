import Image from "next/image";
import React from "react";

const Clients = () => {
  const clients = [
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
    {
      id: 4,
      img: "/home/furniture_one_5.png",
    },
    {
      id: 5,
      img: "/home/furniture_one_5.png",
    },
    {
      id: 6,
      img: "/home/furniture_one_5.png",
    },
     
   
  ];

  return (
    <div>
      <div className="py-10 container">
        <div className="text-center">
          <h2 className="text-extraDark text-xl md:text-4xl font-bold my-2 relative before:w-16 before:h-1.5 before:bg-primary before:absolute before:left-[50%] before:translate-x-[-50%] before:top-8 md:before:top-12">
            Our Trusted <span className="text-primary">Clients</span>
          </h2>
          <p className="mt-6 text-sm md:max-w-2xl mx-auto">
            We are proud to have worked with industry-leading brands and valued
            partners who trust our services and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6  py-10 gap-4">
          {clients.map((client) => (
            <div key={client.id} className=" text-center    cursor-pointer">
              <Image
                src={client.img}
                alt="Client Image"
                width={150}
                height={75}
                className="w-full  "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
