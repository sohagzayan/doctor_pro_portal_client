import React from "react";
import GoogleButton from "react-google-button";
import { MdLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import cartoneImg from "../assets/images/caroneMan.png";
import heroOrnamnet from '../assets/images/heroOrnament.jpg';
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header.js/Header";
const Login = () => {
  return (
    <div style={{
        backgroundImage  : `url(${heroOrnamnet})`
    }}>
      <Header />
      <div className="">
        <div  className=" grid grid-cols-1  flex-col-reverse  lg:grid-cols-2  px-4 items-center">
          <div className=" order-last lg:order-first ">
            <h3 className="flex items-center font-bold">
              <img width="35px" className="mr-1" src={logo} alt="logo" />
              <h2 className="font-bold text-primary my-3 text-2xl">Login Your Account</h2>

            </h3>
            <form action="/" className="flex flex-col w-full ">
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered input-accent w-full mb-7"
              />
              <input
                type="text"
                placeholder="Password"
                class="input input-bordered input-accent w-full mb-7"
              />
              <button className="bg-success justify-center px-10 py-2 text-lg font-bold text-center text-white flex  items-center  ">
                <MdLogin className=" text-4xl mx-4" />{" "}
                <span className="text-center">Sign In</span>
              </button>
              <p className="text-primary mt-4">Not Have a Account ?  <NavLink className="text-xl text-success font-bold cursor-pointer" to="/signup">SignUp</NavLink></p>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">OR</div>
              </div>
              <GoogleButton
                style={{ width: "100%" }}
                className=""
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </form>
          </div>
          <div className="w-full">
            <img className="w-full"  src={cartoneImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
