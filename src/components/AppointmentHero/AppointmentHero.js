import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import img from '../../assets/images/pic1.a3848a11.jpg';

const AppointmentHero = ({date , setDate}) => {
    return (
        <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="img" />
          <div>
          <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
          />
          </div>
        </div>
      </div>
    );
};

export default AppointmentHero;