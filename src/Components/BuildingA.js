import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BuildingImg from "../Assets/buildingA.jpg";
import building1 from "../Assets/building1.jpg";
import building2 from "../Assets/building2.jpeg";
import building3 from "../Assets/building3.jpg";
import building4 from "../Assets/building4.jpg";
import building5 from "../Assets/building5.jpg";
import Footer from './Footer';

const BuildingA = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={BuildingImg} 
          alt="Building" 
          className="w-full h-[90vh] object-cover"  
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-10" data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Automating Buildings</h1>
            <p className="text-lg lg:text-xl max-w-4xl mx-auto">
              Eliminate manual interactions. Reduce energy footprint. Deploy proactive security measures. 
              The future of residential and commercial spaces is here.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 md:px-16 lg:px-24 py-16 space-y-20">
        {/* Smart Building Section */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl text-blue-950 font-semibold mb-8">What's a Smart Building?</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto shadow-xl p-8 border rounded-lg">
            A smart building is an advanced structure that integrates cutting-edge technology to enhance efficiency, comfort, and safety. 
            It uses interconnected systems to monitor and control lighting, climate, security, and energy usage, optimizing the building's operations in real time. 
            Through sensors, automation, and data analytics, smart buildings adapt to occupants' needs and environmental conditions, promoting sustainability and reducing operational costs. 
            The result is a dynamic, responsive environment that offers a superior quality of life and operational excellence.
          </p>
        </div>

        {/* Our Concepts Section */}
        <div className="text-center py-10" data-aos="zoom-in">
          <h1 className="text-4xl text-blue-950 font-semibold mb-10">Our Concepts</h1>
          <ul className="flex flex-wrap justify-center gap-8">
            {["Energy Efficiency", "Efficient Lighting", "Climate Control", "Alarm System", "Access Control"].map((concept, index) => (
              <li key={index} className="flex items-center justify-center p-4 w-32 h-32 rounded-full bg-blue-500 text-center text-white text-lg font-medium shadow-lg hover:bg-blue-600 transition duration-300">
                {concept}
              </li>
            ))}
          </ul>
        </div>

        {/* New Content Section */}
        <div className="mt-40 space-y-32">
          {/* First Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Not a Building, but a Lifestyle</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
                When you buy a home, you don’t buy bricks, mortar, and furniture. You buy an experience. That’s exactly what we aim to deliver. Our building automation concepts are designed from the ground up, which means they can be customized to suit your luxurious lifestyle.
              </p>
              <p className="text-gray-700 font-medium leading-relaxed mt-4">
                Using state-of-the-art building automation technology, you can have a leap-fold jump in improving energy efficiency, security, and convenience.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={building1} alt="Concept 1" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Second Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={building2} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Automate Lobby Lights</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Automatic lobby lights in a smart building are vital for both practicality and efficiency. They ensure that the entrance is well-lit when needed, enhancing safety and security for occupants and visitors. By adjusting lighting based on occupancy and natural light levels, these systems reduce energy consumption, contributing to overall sustainability.
              </p>
            </div>
          </div>

          {/* Third Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Trigger Smart Fire/Smoke Alarms</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Fire and gas sensors in buildings act as vigilant guardians, tirelessly working to protect the sanctuary of your space. These elegant sentinels detect the faintest signs of danger, ensuring swift alerts to prevent potential disasters. Their seamless integration into the building’s infrastructure provides a reassuring shield against fire and gas hazards.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={building3} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Fourth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={building4} alt="Concept 4" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Open Garage Doors from Your Smartphone</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Provide restricted parking access to residents by using RFID-based entrance systems, or even better, allow them to enter their private parking spaces by simply pressing a button on their smartphone. No keyfob required.
              </p>
            </div>
          </div>

          {/* Fifth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Keep an Eye on Every Floor</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Using our advanced IP PoE cameras, you can keep an eye on every floor, every building across your residential/commercial campus. You can pass on access privileges to residents in the building, so that they can give a visual confirmation on visitors and monitor their home from anywhere in the world.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={building5} alt="Concept 5" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildingA;
