import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { MdLogin } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import cartoneImg from "../assets/images/caroneMan.png";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useAuthContext } from "../context/AuthContextProvider";
import useToken from "../hocks/useToken";

const SignUp = () => {
  const { sinUp, googleLogin , username } = useAuthContext();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  console.log(username);
  // console.log(token);
  const [token] = useToken(username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === conformPassword) {
      try {
        await sinUp(email, password, userName);
        // navigate("/login");
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <>
      <Header />
      <div className="mt-16">
        <div className="  grid grid-cols-1  flex-col-reverse  lg:grid-cols-2  px-4 items-center">
          <div className=" order-last lg:order-first">
            <h3 className="flex items-center font-bold">
              <img width="35px" className="mr-1" src={logo} alt="logo" />
              <h2 className="font-bold text-primary my-3 text-2xl ">
                Create Account
              </h2>
            </h3>

            <form
              onSubmit={handleSubmit}
              action="/"
              className="flex flex-col w-full "
            >
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder="User Name "
                className="input input-bordered input-accent w-full mb-7"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="input input-bordered input-accent w-full mb-7"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="input input-bordered input-accent w-full mb-7"
              />
              <input
                onChange={(e) => setConformPassword(e.target.value)}
                value={conformPassword}
                type="text"
                placeholder="Conform Password"
                className="input input-bordered input-accent w-full mb-7"
              />
              <p className="text-red my-3">{error}</p>
              <button className="bg-success justify-center px-10 py-2 text-lg font-bold text-center text-white flex  items-center  ">
                <MdLogin className=" text-4xl mx-4" />{" "}
                <span className="text-center">Sign Up </span>
              </button>
              <p className="text-primary mt-4">
                Already Have a Account ?{" "}
                <NavLink
                  className="text-xl text-success font-bold cursor-pointer"
                  to="/login"
                >
                  Login
                </NavLink>
              </p>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <GoogleButton
                style={{ width: "100%" }}
                className=""
                onClick={async () => {
                  await googleLogin();
                  // navigate("/");
                }}
              />
            </form>
          </div>
          <div className="w-full">
            <img className="w-full" src={cartoneImg} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
