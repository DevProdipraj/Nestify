"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const HeroArea = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image: "/home/furniture_one_1.png",
    },
    {
      id: 2,
      image: "/home/furniture_one_2.png",
    },
  ];

  return (
    <div className="hero-area  max-w-[1850px] mx-auto z-50">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-screen h-40vh">
            <Link href="/product">
              <Image
                src={slide.image}
                alt="Furniture Image"
                width={1920}
                height={1024}
                className="w-full h-full  object-contain"
              />

            </Link>
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-[#00000011] opacity-50"></div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroArea;
