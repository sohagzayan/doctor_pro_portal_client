import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoutes/PrivateRoutes';
import AddDoctors from '../Dashboard/AddDoctors';
import AllReviews from '../Dashboard/AllReviews';
import AllUsers from '../Dashboard/AllUsers';
import Dashboard from '../Dashboard/Dashboard';
import ManageDoctors from '../Dashboard/ManageDoctors';
import MyAppointment from '../Dashboard/MyAppointment';
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
                    <Route path="/appointment" element={ <PrivateRoute> <Appointment /> </PrivateRoute> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} >
                        <Route index element={<MyAppointment />} />
                        <Route path="myReviews" element={<AllReviews />} />
                        <Route path="allUsers" element={<AllUsers />} />
                        <Route path="addDoctors" element={<AddDoctors />} />
                        <Route path="manageDoctor" element={<ManageDoctors />} />
                    </Route>
            </Routes>
        </>
    );
};

export default RootRoutes;