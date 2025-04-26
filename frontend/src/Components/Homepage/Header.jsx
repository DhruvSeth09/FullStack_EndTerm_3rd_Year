// src/Components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import Sidebar from './Sidebar';

function Header({ scrollToAbout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to home with search query as state or param
    navigate('/', { state: { searchTerm } });
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
              <FaBars size={24} />
            </button>
            <Link to="/" className="text-3xl font-bold text-blue-700 hover:text-blue-900 transition">
              <span className="font-extrabold text-red-500">YOUTUBE</span>
            </Link>
          </div>

          

          <div className="space-x-4 flex items-center">
            <Link
              to="/login"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
