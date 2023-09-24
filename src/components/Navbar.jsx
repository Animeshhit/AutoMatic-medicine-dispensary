import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileDemoImage from "../assets/animesh.jpg";

const DropDownLink = (props) => {
  return (
    <>
      <NavLink
        to={`${props.Link}`}
        className="text-gray-700 block px-4 py-3 text-sm hover:bg-zinc-300 transition"
        role="menuitem"
        tabindex="-1"
        id="menu-item-0"
        onClick={props.ActionOnClick}
      >
        {props.Name}
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(false);
  const changeDropDownStatus = () => {
    setDropDownStatus(!dropDownStatus);
  };
  return (
    <>
      <div className="w-full h-auto py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="left_container py-3">
              <div className="Logo">
                <NavLink
                  to={"/"}
                  className="text-sm  sm:text-xl font-bold text-zinc-800"
                >
                  Smart medicine dispencer
                </NavLink>
              </div>
            </div>
            <div className="right_container flex items-center">
              <div
                onClickCapture={changeDropDownStatus}
                className={`menu p-1.5 cursor-pointer hover:text-zinc-600 text-zinc-800 ${
                  LoginStatus ? "hidden" : "flex"
                } sm:hidden items-center justify-center`}
              >
                <span className="material-symbols-outlined">menu</span>
              </div>
              {LoginStatus ? (
                <>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className=" flex items-center gap-1"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={changeDropDownStatus}
                      >
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src={ProfileDemoImage}
                          alt="logo Image"
                        />
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`absolute ${
                        dropDownStatus ? "" : "hidden"
                      } right-0 z-10 mt-8 sm:mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-2" role="none">
                        <DropDownLink
                          Name="Account Settings"
                          Link="/auth/doctor/login"
                          ActionOnClick={HashChangeEvent}
                        />
                        <DropDownLink
                          Name="Contact Us"
                          Link="/auth/doctor/register"
                          ActionOnClick={HashChangeEvent}
                        />
                        <DropDownLink
                          Name="Sign Out"
                          Link="/auth/login"
                          ActionOnClick={HashChangeEvent}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="hidden sm:flex items-center w-full justify-center gap-x-1.5 rounded-full bg-zinc-800 px-6 py-3 text-sm font-semibold text-white shadow-sm  hover:bg-zinc-600 transition"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={changeDropDownStatus}
                      >
                        Join Now
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`absolute ${
                        dropDownStatus ? "" : "hidden"
                      } right-0 z-10 mt-8 sm:mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-2" role="none">
                        <DropDownLink
                          Name="Doctor's Login"
                          Link="/auth/doctor/login"
                          ActionOnClick={HashChangeEvent}
                        />
                        <DropDownLink
                          Name="Doctor's Register"
                          Link="/auth/doctor/register"
                          ActionOnClick={HashChangeEvent}
                        />
                        <DropDownLink
                          Name="Login/Register As user"
                          Link="/auth/login"
                          ActionOnClick={HashChangeEvent}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
