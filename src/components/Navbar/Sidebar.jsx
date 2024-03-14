import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { categories } from '../../utils/data';

const isNotActiveStyle = 'flex items-center px-5 gap-5 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 ml-1 gap-5 text-base	font-semibold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col mb-28">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-3">

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
            <MdAdminPanelSettings />
            Dashboard
          </NavLink>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
                {category.image}
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
        <div
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src="https://xsgames.co/randomusers/assets/avatars/female/64.jpg" className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>Dhananjay Yadav</p>
          <IoIosArrowForward />
        </div>
    </div>
  );
}

export default Sidebar;