import React from "react";
import Head from "next/head";
import Navbar from "@/component/home/Navbar";
import Top from "@/component/home/Top";

const Home = () => {
  return (
      <div>
        <Top/>
        <Navbar />
      </div>
  );
};

export default Home;
