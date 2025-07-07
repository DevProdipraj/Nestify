"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="shadow-md md:py-4">
        <div className="container relative">
          {/* Top Navbar */}
          <div className="flex items-center justify-between md:mx-6">
            <div className="hidden md:block">
              <Image
                src="/brandicon.png"
                width={200}
                height={100}
                className="w-[180px] h-[75px]"
                alt="Brand Icon"
                priority
              />
            </div>

            <div className="md:hidden">
              <Image
                src="/brandicon.png"
                width={150}
                height={75}
                className="w-[120px] h-[60px]"
                alt="Brand Icon"
                priority
              />
            </div>

            <div className="flex items-center justify-center space-x-3 md:space-x-5">
              <div className="hidden md:block">
                <div className="flex items-center justify-center md:space-x-5">
                  <IoSearchSharp
                    size={25}
                    className="text-[#6a6a6a] font-bold"
                  />
                  <FiHeart size={25} className="text-[#6a6a6a] font-bold" />
                </div>
              </div>
              <IoCartOutline size={25} className="text-[#6a6a6a] font-bold" />
              <FaRegUser size={25} className="text-[#6a6a6a] font-bold" />
            </div>

            {/* Hamburger Button */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiMenu2Line size={25} />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center space-x-8 pt-4 border-t border-gray-200">
              {[
                { name: "Home", href: "/" },
                { name: "Product", href: "/product" },
                { name: "About", href: "/about" },
                { name: "Blogs", href: "/blog" },
                { name: "Seller", href: "/seller" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index} className="relative group overflow-hidden">
                  <Link href={item.href} className="inline-block">
                    {item.name}
                  </Link>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 bg-neutral bg-opacity-50 md:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Mobile Menu Panel */}
          <div
            className={`fixed inset-y-0 left-0 z-50 h-screen w-3/4 max-w-sm transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="mb-6 flex justify-end">
              <IoIosCloseCircleOutline
                size={30}
                className="cursor-pointer text-gray-600"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Menu Links */}
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Product", href: "/product" },
                { name: "About", href: "/about" },
                { name: "Blogs", href: "/blog" },
                { name: "Seller", href: "/seller" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name} onClick={() => setIsOpen(false)}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-gray-800 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
