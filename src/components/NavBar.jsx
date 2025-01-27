import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/SN.logo-Photoroom-removebg-preview.png";
import { navItems } from "../constants";

const NavBar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const handletoggle = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-14 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">SN Studios</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/#" className="py-2 px-3 border rounded-md">
              SignIn
            </a>
            <a
              href="/#"
              className=" bg-gradient-to-r from-green-600 to-green-900 py-2 px-3 border rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handletoggle}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-5 ">
              <a href="/#" className="py-2 px-3 border rounded-md">
                SignIn
              </a>
              <a
                href="/#"
                className=" bg-gradient-to-r from-green-600 to-green-900 py-2 px-3  rounded-md "
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
