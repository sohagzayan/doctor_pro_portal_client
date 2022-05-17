import React from "react";
import heroOrnament from "../assets/images/heroOrnament.jpg";
import AboutUs from "../components/AboutUs/AboutUs";
import Header from "../components/Header.js/Header";
import Hero from "../components/Hero.js/Hero";
import OurLocation from "../components/OurLocation/OurLocation";
import OurServices from "../components/OurServices/OurServices";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${heroOrnament})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=""
      >
        <Header />
        <Hero />
      </div>
      <OurLocation />
      <OurServices />
      <AboutUs />
    </div>
  );
};

export default Home;
