import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandImage1 from "../Assets/landing2.jpg";

const Landing2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center mt-10 px-5 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 p-5 items-center">
        <div className="space-y-8" data-aos="fade-right">
          <div className="space-y-6 text-justify">
            <div className="text-center" data-aos-delay="100">
              <h2 className="text-3xl font-semibold text-gray-700">Installs in Every Home. Old or New.</h2>
              <p className="text-gray-600 pt-5 text-lg">
                It doesn’t matter if you wish to automate stuff in your newly purchased home or get the kit installed in your current one, our intelligent solutions work everywhere. No strings attached.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center" data-aos="fade-left">
          <img className="h-auto max-w-full lg:max-w-sm rounded-lg shadow-lg" src={LandImage1} alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default Landing2;
