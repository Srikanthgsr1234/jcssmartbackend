import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IndImg from "../Assets/IndA.jpg";
import Ind1 from "../Assets/ind1.jpeg";
import Ind2 from "../Assets/ind2.jpeg";
import Ind3 from "../Assets/ind3.jpg";
import Ind4 from "../Assets/ind4.jpg";
import Ind5 from "../Assets/ind5.jpeg";
import Footer from './Footer';

const IndustrialA = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={IndImg} 
          alt="Building" 
          className="w-full h-[90vh] object-cover"  
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-10" data-aos="zoom-in">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">The Fourth Industrial Revolution has begun.</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 md:px-16 lg:px-24 py-16 space-y-20">
        {/* Smart Building Section */}
        <div className="" data-aos="fade-down">
          <h1 className="text-4xl text-blue-950 font-semibold mb-8 text-center">What's Industrial Automation?</h1>
          <div className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto shadow-xl p-8 border rounded-lg">
          <p>
          When Industrial revolution began in 1760, it transformed the world, shifting the focus from skilled man-power to special-purpose machinery. We could now manufacture goods more quickly, reliably and cost-efficiently. It paved way for thousands of new industries that leveraged the power of machines to produce goods at scale.
          </p>
          <p className="pt-5">
          While machines became good at eliminating repetitive jobs, industries still needed highly-qualified professionals, who could control, monitor and maintain the complicated manufacturing workflows. Industrial automation aims at bringing complete autonomy to the manufacturing sector, allowing businesses to take decisions based on data, rather than intuition.
          </p>
          <p className="pt-5">
          Using M2M (machine-to-machine) communication and network of intelligent sensors, industries can now create fully-automated processes that can take contextual decisions, with minimal human intervention. It’s estimated that industrial automation would massively reduce the operational costs of businesses, while improving the cumulative throughput and turnaround time.
          </p>
           
          </div>
        </div>

        {/* New Content Section */}
        <div className="mt-40 space-y-32">
          {/* First Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Visualize your data. Get better insights.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Monitor your production workflow in real-time. Know how much energy, time or resources your machines consume. Use the collected data to improve productivity, reduce leakages and optimize industrial processes.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
              <img src={Ind1} alt="Concept 1" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Second Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Ind2} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Track your inventory with GPS monitoring.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Tired of drivers not picking up calls? Do you wish you could track all your vehicles in real-time, so that you can provide accurate, in-time status updates to stakeholders? We’ve got your back. Our technology partners provide you the flexibility to track vehicles in real-time, from anywhere in the world. 
              </p>
            </div>
          </div>

          {/* Third Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4 text-center">Get alerts and notifications.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Using industrial automation, you can create an interplay between all functional elements of your business. Want to be notified when the production stops, or get instant alerts when the output is low? Industrial automation monitors your workflows in the background, so that you can take care of what matters the most. 
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Ind3} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Fourth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="zoom-in">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Ind4} alt="Concept 4" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Automate processes. Streamline workflow.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Once you have connected the basic industrial units, you can now create a lego-block setup that facilitates autonomous M2M (machine-to-machine) communication. Using the building-block framework, you can now completely automate a process or workflow, depending upon the level of complexity.  
              </p>
            </div>
          </div>

          {/* Fifth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-up">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Track machinery movements.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Our retrofit sensors plug into existing legacy systems, giving you the flexibility to adapt quickly and scale swiftly. From monitoring the temperature of boilers to tracking machinery movements. we offer wide-spread applications.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Ind5} alt="Concept 5" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustrialA;
