import React, { useState } from 'react';
import AppointmentHero from '../components/AppointmentHero/AppointmentHero';
import AvailableAppointment from '../components/AvailableAppoinmnets/AvailableAppointment';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const Appointment = () => {
    const [date , setDate] = useState(new Date())

    return (
        <>
        <Header />
        <div>
           <AppointmentHero 
           date={date}
           setDate={setDate}
           />
           <AvailableAppointment 
           date={date}
           setDate={setDate}
           />
        </div>
        <Footer />
        </>
    );
};

export default Appointment;