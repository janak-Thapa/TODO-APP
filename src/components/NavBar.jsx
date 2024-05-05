// NavBar.js
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import SideBar from './SideBar';
const NavBar = ({ setShowCompleted, showCompleted }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    setShowSearch(false); 
  };

  const handleToggleCompleted = () => {
    setShowCompleted((prev) => !prev);
  };

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-center">

      <nav className="hidden lg:flex lg:flex-row lg:justify-between items-center p-5 bg-[#172842] w-full">
        <div className="flex items-center justify-between w-full">
      
          <div className="text-lg text-white font-bold cursor-pointer">TODO APP</div>

          <div className="flex items-center space-x-4">
            <div className="relative flex items-center cursor-pointer">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-48 px-2 py-2 rounded-lg border border-gray-200 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoIosSearch className="text-gray-500 cursor-pointer" />
              </div>
            </div>

       
            <select className="px-2 py-1 rounded-md focus:outline-none border border-gray-200 cursor-pointer">
              <option value="" className='hidden'>Filter by category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>

            <select className="px-2 py-1 rounded-md focus:outline-none border border-gray-200 cursor-pointer">
              <option value="" className='hidden'>Filter by deadline</option>
              <option value="passed">Passed</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>

            <label className="flex items-center text-white">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onChange={handleToggleCompleted}
                checked={showCompleted}
              />
              <span className="ml-2 cursor-pointer">Completed Tasks</span>
            </label>
          </div>
        </div>
      </nav>

   
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
};

export default NavBar;
