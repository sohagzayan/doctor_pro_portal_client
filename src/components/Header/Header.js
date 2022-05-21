import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAuthContext } from "../../context/AuthContextProvider";
const Header = () => {
  const { username , logOut} = useAuthContext();
  console.log(username);

  const handleLogOut = async()=>{
    try {
     await logOut()
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="navbar  py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
                {
                  username ?
                  <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                      : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  }
                >
                  LogOut
                </NavLink>
                :
                <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Login
              </NavLink>
                }
            </li>
          </ul>
        </div>
        <NavLink
          className="btn btn-ghost normal-case text-xl font-semibold tracking-wide"
          to="/"
        >
          <h3 className="flex items-center font-bold">
            <img width="35px" className="mr-1" src={logo} alt="logo" />
            <span className="mt-2 text-secondary">Doctor Portal</span>
          </h3>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal s p-0">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive
                  ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
              }
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive
                  ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
              }
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                  : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            {username ? (
              <NavLink
              
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-warning bg-transparent  text-lg font-bold  subpixel-antialiased	"
                    : "text-secondary bg-transparent  text-lg font-bold  subpixel-antialiased	"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>

      <div className=" navbar-end ">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=33791"
                alt="img"
              />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <span onClick={handleLogOut}>Logout</span>
            </li>
          </ul>
        </div>
        <div>
        <label
            for="my-drawer-2"
            class="text-accent cursor-pointer  drawer-button lg:hidden"
          >  <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
