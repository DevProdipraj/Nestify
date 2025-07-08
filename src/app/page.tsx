import React from "react";
import Head from "next/head";
import Navbar from "@/component/home/Navbar";
import NavbarTop from "@/component/home/NavbarTop";
import HeroArea from "@/component/home/HeroArea";
import TopProduct from "@/component/home/TopProduct";
import SpecialProducts from "@/component/home/SpecialProducts";
import ShowCase from "@/component/home/ShowCase";
import Footer from "@/component/home/Footer";
import Clients from "@/component/home/Clients";
import Review from "@/component/home/Review";
import Blog from "@/component/home/Blog";

const Home = () => {
  return (
      <div>
        <NavbarTop />
        <Navbar />
        <HeroArea />
        <TopProduct />
        <SpecialProducts/>
        <ShowCase />
        <Blog />
        <Clients />
        <Review /> 
        <Footer />
      </div>
  );
};

export default Home;
