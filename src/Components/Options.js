import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Lazy load the Sidebar component
const Sidebar = lazy(() => import('./Sidebar'));

const Options = ({ user }) => {
  return (
    <div className="flex h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>

      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 py-6 lg:py-8 px-3 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {user ? (
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 lg:mb-6">
              Welcome Home, {user.name}
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 lg:mb-6">
              Welcome Home
            </h1>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-screen-lg w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          <Link
            to="/plant-watering"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Plant Watering System</h2>
            <p className="text-md text-center">Control and monitor your plant watering system.</p>
          </Link>
          <Link
            to="/light"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Light Control</h2>
            <p className="text-md text-center">Controlling the Lights</p>
          </Link>
          <Link
            to="/gas"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Gas Detection</h2>
            <p className="text-md text-center">Detection of Gas</p>
          </Link>
          <Link
            to="/temperature"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Temperature</h2>
            <p className="text-md text-center">Monitoring the Temperature</p>
          </Link>
          <Link
            to="/humidity"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Humidity</h2>
            <p className="text-md text-center">Monitoring the Humidity.</p>
          </Link>
          <Link
            to="/fire"
            className="bg-white hover:bg-blue-950 rounded-lg shadow-lg p-4 text-black hover:text-white h-[220px] flex flex-col justify-center items-center transition duration-300"
          >
            <h2 className="text-xl mb-3 text-center font-bold">Flame Detection</h2>
            <p className="text-md text-center">Detection of Flame.</p>
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Options;
