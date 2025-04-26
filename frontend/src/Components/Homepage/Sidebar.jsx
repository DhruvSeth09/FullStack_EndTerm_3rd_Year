import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={"fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-20 " + (isOpen ? "translate-x-0" : "-translate-x-full")}
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-red-600">YouTube Clone</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/" onClick={toggleSidebar} className="text-gray-700 hover:text-red-600 font-semibold">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/dashboard" onClick={toggleSidebar} className="text-gray-700 hover:text-red-600 font-semibold">
                  Dashboard
                </Link>
              </li>
              {/* Add more sidebar links or categories here */}
            </ul>
          </nav>
        </div>
        <div className="text-sm text-gray-600">© 2024 YouTube Clone</div>
      </div>
    </div>
  );
};

export default Sidebar;
