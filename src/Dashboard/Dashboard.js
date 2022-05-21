import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <h2 className="text-lg text-accent font-bold uppercase mb-3">Welcome Here</h2>
          <Outlet />
       
        </div>
        <div class="drawer-side shadow-lg">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class=" p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="mb-3 text-lg font-bold text-accent">
              <NavLink to='/dashboard'>My Appointment</NavLink>
            </li>
            <li className="mb-3 text-lg font-bold text-accent">
              <NavLink to='myReviews'>My Reviews</NavLink>
            </li>
            <li className="mb-3 text-lg font-bold text-accent">
              <NavLink to='allUsers'>All Users</NavLink>
            </li>
            <li className="mb-3 text-lg font-bold text-accent">
              <NavLink to='addDoctors'>Add a Doctors</NavLink>
            </li>
            <li className="mb-3 text-lg font-bold text-accent">
              <NavLink to='manageDoctor'>Manage Doctors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
