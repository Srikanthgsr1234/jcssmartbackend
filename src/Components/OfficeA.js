import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OfficeImg from "../Assets/officeA.jpg";
import Office4 from "../Assets/office4.jpg";
import Office1 from "../Assets/office1.jpg";
import Office3 from "../Assets/office3.jpg";
import building2 from "../Assets/building2.jpeg";
import Office2 from "../Assets/office2.jpg";
import Footer from './Footer';

const OfficeA = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={OfficeImg} 
          alt="Building" 
          className="w-full h-[90vh] object-cover"  
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-10" data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Build the geekiest workplace.</h1>
            <p className="text-lg lg:text-xl max-w-4xl mx-auto">
            Exclusively for startups and businesses, looking to make a bold statement.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 md:px-16 lg:px-24 py-16 space-y-20">
        {/* Smart Building Section */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl text-blue-950 font-semibold mb-8">What's Office Automation ?</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto shadow-xl p-8 border rounded-lg">
          Office automation transforms mundane tasks into seamless workflows, enhancing efficiency and productivity through integrated systems. It liberates time for creativity and strategic thinking, empowering teams to focus on innovation and growth. Embracing office automation cultivates a dynamic workplace where technology acts as a catalyst for streamlined operations and inspired teamwork, ultimately shaping a future where productivity meets elegance.
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
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Automate climate control.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              When your office temperature is too hot or cold, it can increase stress and reduce productivity. But when the room temperature is just right, your team is 10x more energetic, and you get more things done.
              </p>
              <p className="text-gray-700 font-medium leading-relaxed mt-4">
              Smart climate control technology not only maintains the right temperature by intelligently analysing your usage patterns, but also helps you save energy by cutting down the power when it’s not needed.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
              <img src={Office4} alt="Concept 1" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Second Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
              <img src={building2} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Automated Lights</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              An automatic light system in offices brings a blend of convenience and sustainability, illuminating spaces only when needed. This smart technology reduces energy consumption, leading to significant cost savings and a smaller carbon footprint. By providing optimal lighting conditions, it enhances employee comfort and productivity, fostering a conducive work environment.
              </p>
            </div>
          </div>

          {/* Third Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Protect your employees</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Fire and gas detectors in offices serve as vigilant guardians, safeguarding both people and property. These advanced systems provide early warnings, ensuring swift responses and preventing potential disasters. By continuously monitoring the environment, they create a secure and reassuring atmosphere for all occupants. Implementing these detectors demonstrates a profound commitment to safety and proactive risk management.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
              <img src={Office1} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Fourth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
              <img src={Office3} alt="Concept 4" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Water your Plants Automatically</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Plant watering systems in offices bring nature indoors, ensuring greenery thrives effortlessly. These automated systems maintain optimal moisture levels, enhancing the ambiance and air quality. By reducing the need for manual watering, they save time and promote a healthier, more inviting workspace. Embracing this technology reflects a commitment to employee well-being and sustainable office practices.
              </p>
            </div>
          </div>

          {/* Fifth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4 text-center">Monitor workforce. From anywhere.</h2>
              <p className="text-gray-700 font-medium leading-relaxed text-center">
              Are you on the go all the time, but want to keep a tab on all the things going around in your work-space? Do you have multiple office locations, and want a simple, easy-to-use app that can monitor everything on your smartphone?
              </p>

              <p className="text-gray-700 font-medium leading-relaxed mt-5 text-center">
              We’ve got you covered. Our PoE IP infrastructure let you view, monitor and track all the ongoing activities in your work place, from anywhere in the world.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
              <img src={Office2} alt="Concept 5" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OfficeA;
