import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandImage1 from "../Assets/landing1.jpg";

const Landing1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
    <div className="min-h-screen bg-gray-200 flex items-center justify-center py-10 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 p-5">
        <div className="flex justify-center" data-aos="fade-right">
          <img className="w-full max-w-lg rounded-lg shadow-lg" src={LandImage1} alt="Landing" />
        </div>
        <div className="space-y-8 ml-5" data-aos="fade-left">
          <h1 className="text-4xl font-bold text-gray-800">Live in the Future</h1>
          <div className="space-y-6">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-semibold text-gray-700">Control Everything at Your Fingertips</h2>
              <p className="text-gray-600 pt-3">Turn on your lights, play your favourite music or change your room temperature, at the tap of your smartphone.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-semibold text-gray-700">Run Personalized Schedules</h2>
              <p className="text-gray-600 pt-3">Have your coffee ready when you wake up. Automatically turn everything off when you leave for work. Experience true intelligence.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-semibold text-gray-700">Talk to Your Home or Make it Talk</h2>
              <p className="text-gray-600 pt-3">Simply talk to your virtual voice assistant, and ask it to do anything for you– be it ordering groceries to solving a math problem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    
        
    </div>
    
  );
};

export default Landing1;
