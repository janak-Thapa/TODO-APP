// SideBar.js
import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const SideBar = ({
  sidebarOpen,
  setSidebarOpen,
  showCompleted,
  setShowCompleted,
  handleToggleSidebar,
}) => {
  return (
    <div className="lg:hidden relative">
   
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-[#172842] w-64 h-screen fixed top-0 left-0 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
       
        <button
          className="absolute top-3 right-3 text-white text-2xl focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
          &times;
        </button>

     
        <nav className="flex flex-col justify-between h-full p-5">
          <div className="text-lg text-white font-bold mb-4 cursor-pointer">TODO APP</div>

 
          <div className="space-y-4">
            
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full px-2 py-2 rounded-lg border border-gray-200 focus:outline-none mb-2 relative"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IoIosSearch className="text-gray-500 cursor-pointer" />
              </div>
            </div>

       
            <select className="w-full px-2 py-1 rounded-md focus:outline-none border border-gray-200 cursor-pointer">
              <option value="" className="hidden">
                Filter by category
              </option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>

           
            <select className="w-full px-2 py-1 rounded-md focus:outline-none border border-gray-200 cursor-pointer">
              <option value="" className="hidden">
                Filter by deadline
              </option>
              <option value="passed">Passed</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </div>

       
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              onChange={() => setShowCompleted((prev) => !prev)}
              checked={showCompleted}
            />
            <span className="ml-2 cursor-pointer">Completed Tasks</span>
          </label>
        </nav>
      </div>

   
      <button
        className="fixed top-3 right-3 text-white text-2xl focus:outline-none"
        onClick={handleToggleSidebar}
      >
        &#9776;
      </button>
    </div>
  );
};

export default SideBar;
