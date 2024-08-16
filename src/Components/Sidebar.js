import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHomeOutline, IoThermometerOutline, IoBulbOutline } from "react-icons/io5";
import { GiPlantWatering } from "react-icons/gi";
import { WiHumidity, WiWindy } from "react-icons/wi";
import { FaFireAlt } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { to: "/options", label: "Home", icon: <IoHomeOutline className="text-xl" /> },
    { to: "/plant-watering", label: "Plant Watering", icon: <GiPlantWatering className="text-xl" /> },
    { to: "/temperature", label: "Temperature", icon: <IoThermometerOutline className="text-xl" /> },
    { to: "/light", label: "Lighting", icon: <IoBulbOutline className="text-xl" /> },
    { to: "/humidity", label: "Humidity", icon: <WiHumidity className="text-xl" /> },
    { to: "/fire", label: "Fire Status", icon: <FaFireAlt className="text-xl" /> },
    { to: "/gas", label: "Gas Status", icon: <WiWindy className="text-xl" /> },
  ];

  return (
    <div className="w-60 h-screen bg-blue-950 flex flex-col items-start py-4 px-2 rounded-md shadow-lg">
      <ul className="w-full">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            className="w-full mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={item.to}
              className="flex items-center text-lg font-semibold text-white p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-blue-950 hover:scale-105"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
