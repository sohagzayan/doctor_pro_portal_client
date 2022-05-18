import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from '../pages/Appointment';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const RootRoutes = () => {
    return (
        <>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
};

export default RootRoutes;