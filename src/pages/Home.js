import React from "react";
import heroOrnament from "../assets/images/heroOrnament.jpg";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import OurLocation from "../components/OurLocation/OurLocation";
import OurServices from "../components/OurServices/OurServices";
import Testimonial from "../components/Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${heroOrnament})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
    
      >
        <Header />
        <Hero />
      </div>
      <OurLocation />
      <OurServices />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
