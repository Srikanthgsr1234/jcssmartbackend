import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jcsGroupImage from '../Assets/jcsgr.png';
import { FcOnlineSupport } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { FaRegBuilding } from "react-icons/fa";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { FaHotel } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiHospital } from "react-icons/pi";
import { IoThermometerOutline, IoBulbOutline } from "react-icons/io5";
import { GiPlantWatering } from "react-icons/gi";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { FaFireAlt } from "react-icons/fa"
import { FaQuestionCircle } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

const Header = ({ user, onLogout }) => {
  const [message, setMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000); // Clear the message after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogout = () => {
    onLogout(); // Call parent component or context function to handle logout
  };

  const handleSmartHomeClick = () => {
    if (!user) {
      setMessage('You have to login first');
      navigate('/login');
    } else {
      navigate('/options');
    }
  };

  const handleDropdownItemClick = (path) => {
    setDropdownOpen(null); // Close the dropdown
    navigate(path); // Navigate to the selected route
  };

  const handleDropdownMouseEnter = (dropdown) => {
    clearTimeout(dropdownTimeout.current); // Clear any existing timeout
    setDropdownOpen(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 300); // Delay closing the dropdown
  };

  return (
    <header className="relative top-0 left-0 w-full z-10 p-4 flex flex-col md:flex-row items-center bg-white shadow-md">
      <div className="flex items-center w-full md:w-auto">
        <Link to="/">
          <img className="w-20 h-auto rounded-md cursor-pointer" src={jcsGroupImage} alt="jcsGroup" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-2 md:mt-0 md:ml-6 space-x-4 relative">
        {/* Automate Button */}
        <div
  className="relative"
  onMouseEnter={() => handleDropdownMouseEnter('automate')}
  onMouseLeave={handleDropdownMouseLeave}
>
  <button
    className="flex items-center space-x-2 p-2 text-xl font-semibold hover:text-blue-600 hover:scale-105 transition-transform"
  >
    <GiSettingsKnobs />
    <span>Automate</span>
  </button>
  {dropdownOpen === 'automate' && (
    <div className="absolute top-full left-0 mt-2 w-full max-w-xs bg-white border border-gray-300 shadow-lg rounded-lg">
  <div className="flex flex-col items-center">
    <button
      onClick={() => handleDropdownItemClick('/homeA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <FcHome className="mr-2" />
      <span>Home</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/buildingA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <FaRegBuilding className="mr-2" />
      <span>Building</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/officeA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <PiBuildingOfficeDuotone className="mr-2" />
      <span>Office</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/hotelA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <FaHotel className="mr-2" />
      <span>Hotel</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/industrialA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <LiaIndustrySolid className="mr-2" />
      <span>Industry</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/hospitalA')}
      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left flex items-center rounded-lg"
    >
      <PiHospital className="mr-2" />
      <span>Hospital</span>
    </button>
  </div>
</div>

  )}
</div>



        {/* Concepts Button */}
        <div
  className="relative"
  onMouseEnter={() => handleDropdownMouseEnter('concepts')}
  onMouseLeave={handleDropdownMouseLeave}
>
  <button
    className="flex items-center space-x-1 p-2 text-xl font-semibold hover:text-blue-600 hover:scale-105 transition-transform"
  >
    <AiOutlineThunderbolt />
    <span>Concepts</span>
  </button>
  {dropdownOpen === 'concepts' && (
    <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-300 shadow-lg rounded-lg">
      <div className="flex flex-col">
        <button
          onClick={() => handleDropdownItemClick('/automation1')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <GiPlantWatering className="mr-2" />
          <span>Plant Watering</span>
        </button>
        <button
          onClick={() => handleDropdownItemClick('/automation2')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <IoThermometerOutline className="mr-2" />
          <span>Temperature Monitoring</span>
        </button>
        <button
          onClick={() => handleDropdownItemClick('/automation3')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <WiHumidity className="mr-2" />
          <span>Humidity Monitoring</span>
        </button>
        <button
          onClick={() => handleDropdownItemClick('/automation4')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <FaFireAlt className="mr-2" />
          <span>Fire Detection</span>
        </button>
        <button
          onClick={() => handleDropdownItemClick('/automation5')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <IoBulbOutline className="mr-2" />
          <span>Light Controlling</span>
        </button>
        <button
          onClick={() => handleDropdownItemClick('/automation6')}
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
        >
          <WiWindy className="mr-2" />
          <span>Gas Monitoring</span>
        </button>
      </div>
    </div>
  )}
</div>


        {/* Support Button */}
        <div
          className="relative"
          onMouseEnter={() => handleDropdownMouseEnter('support')}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <button
            className="flex items-center space-x-1 p-2 text-xl font-semibold hover:text-blue-600 hover:scale-105 transition-transform"
          >
            <FcOnlineSupport />
            <span>Support</span>
          </button>
          {dropdownOpen === 'support' && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg">
  <div className="flex flex-col">
    <button
      onClick={() => handleDropdownItemClick('/automation1')}
      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
    >
      <FaQuestionCircle className="mr-3" />
      <span>FAQs</span>
    </button>
    <button
      onClick={() => handleDropdownItemClick('/contact-us')}
      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left rounded-lg"
    >
      <FcContacts className="mr-3" />
      <span>Contact Us</span>
    </button>
  </div>
</div>

          )}
        </div>

        {/* Store Button */}
        <div
          className="relative"
          onMouseEnter={() => handleDropdownMouseEnter('store')}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <Link to="/products"
            className="flex items-center space-x-1 p-2 text-xl font-semibold hover:text-blue-600 hover:scale-105 transition-transform"
          >
            <MdOutlineShoppingCart />
            <span>Store</span>
          </Link>
         
        </div>
      </div>
      <div className="flex items-center mt-2 md:mt-0 md:ml-auto space-x-4">
      <button
          onClick={handleSmartHomeClick}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Smart Home
        </button>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold text-gray-800">{user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
              Login
            </button>
          </Link>
        )}
      </div>
      {message && (
        <div className="absolute top-0 left-0 w-full bg-red-600 text-white text-center p-2">
          {message}
        </div>
      )}
    </header>
  );
};

export default Header;
