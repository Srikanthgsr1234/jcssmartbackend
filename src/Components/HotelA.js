import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HotelImg from "../Assets/hotelA.jpg";
import Hotel1 from "../Assets/hotel1.jpg";
import Hotel2 from "../Assets/hotel2.jpg";
import Hotel3 from "../Assets/hotel3.jpg";
import Hotel4 from "../Assets/hotel4.jpg";
import Hotel5 from "../Assets/hotel5.jpg";
import Footer from './Footer';

const HotelA = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={HotelImg} 
          alt="Building" 
          className="w-full h-[90vh] object-cover"  
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-10" data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Build the hospital of the future.</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 md:px-16 lg:px-24 py-16 space-y-20">
        {/* Smart Building Section */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl text-blue-950 font-semibold mb-8">What's Hotel Automation?</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto shadow-xl p-8 border rounded-lg">
          Hotel automation revolutionizes the guest experience, seamlessly integrating technology for unparalleled comfort and convenience. Smart systems personalize every aspect, from room lighting and temperature to concierge services, creating a bespoke stay. Automation streamlines operations, enhancing efficiency and allowing staff to focus on exceptional, personalized service. By embracing innovation, hotels elevate luxury and redefine hospitality standards.
          </p>
        </div>

        {/* Our Concepts Section */}
        <div className="text-center py-10" data-aos="zoom-in">
          <h1 className="text-4xl text-blue-950 font-semibold mb-10">Our Concepts</h1>
          <ul className="flex flex-wrap justify-center gap-8">
            {["Energy Efficiency", "Efficient Lighting", "Climate Control", "Alarm System", "Access Control", "Wi-Fi Setup"].map((concept, index) => (
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
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Control multimedia at your fingertips</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              You no longer need a separate remote for controlling every device in the room. Your guests can now control TVs, STBs, music systems and pretty much everything in the room from a single app. The best part? You can even create intelligent scenes to combine multiple activities and devices.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
              <img src={Hotel1} alt="Concept 1" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Second Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
              <img src={Hotel2} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Match every mood. Every emotion.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              From instantly creating a romantic setup to getting the office room ready in just a few minutes, you can now change your hotel’s ambience to match every mood, every emotion, every occasion.
              </p>
            </div>
          </div>

          {/* Third Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4 text-center">Maintaining Pleasant Atmopshere</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Temperature and humidity detectors in hotels craft an environment of unparalleled comfort, finely tuning the ambiance to guests’ preferences. These intelligent systems ensure optimal conditions, preventing discomfort and enhancing relaxation. By maintaining perfect climate control, they elevate the guest experience and uphold the hotel’s reputation for excellence. 
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
              <img src={Hotel3} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Fourth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="zoom-in">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hotel4} alt="Concept 4" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Safety Measures</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Gas and fire detectors in hotels act as vigilant guardians, silently safeguarding every corner of the property. With rapid detection and alert systems, they ensure swift responses to potential dangers, preserving both lives and property. Their presence instills confidence and peace of mind, allowing guests to fully immerse in comfort without concerns. 
              </p>
            </div>
          </div>

          {/* Fifth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="zoom-in">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4 text-center">Save energy with intelligent sensing.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Did you know that you could cut your energy bills by 80% using smart presence sensors that intelligently turn on the lobby lights only when human presence is detected? Discover a better, smarter way of saving energy with automation.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hotel5} alt="Concept 5" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelA;
