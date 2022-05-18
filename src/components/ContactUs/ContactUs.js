import React from "react";
import { FaHome } from "react-icons/fa";
import lineBg from '../../assets/images/lineBg.png';
import gmail from '../../assets/images/mail.png';
const ContactUs = () => {
  return (
    <div style={{
      backgroundImage : `url(${lineBg})`,
      backgroundSize : 'cover'
    }} className="mx-4 mt-20">
      <div className="text-center">
        <h3 className="text-4xl text-secondary font-bold tracking-wider mb-3">
          Contact Us
        </h3>
        <div className="inline-block">
          <div className="bg-primary px-4 sm:px-8 py-2 mb-5 rounded-lg  text-white flex items-center">
            <button className="flex items-center text-lg font-bold  cursor-pointer">
              <FaHome className="mx-2" /> Appointment
            </button>
            <span className="px-2">/</span>
            <button className="text-lg font-bold  cursor-pointer">Contact Us</button>
          </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-around items-center mt-10 ">
              <div>
                    <img  src={gmail} alt="" />
              </div>
              <div className="flex flex-col w-9/12 lg:w-4/12 mt-10">
              <input type="text" placeholder="Your Name" className="input border-2 border-secondary mb-8 input-bordered w-full " />
              <input type="text" placeholder="Email" className="input mb-8  border-2 border-secondary input-bordered input-secondary w-full " />
              <input type="text" placeholder="Phone Numbers" className="input  border-2 border-secondary  mb-8 input-bordered input-secondary w-full " />
              <input type="text" placeholder="Selected Department" className="input  border-2 border-secondary mb-8 input-bordered input-secondary w-full " />
              <select className="select w-full border-2 border-primary mb-6 ">
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
                </select>
              <textarea className="textarea  border-2 border-primary" placeholder="Type Message"></textarea>
              </div>

          </div>
      
      </div>
    </div>
  );
};

export default ContactUs;
