import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HosImg from "../Assets/hosA.jpg";
import Hos1 from "../Assets/hos1.png";
import Hos2 from "../Assets/hos2.png";
import Hos3 from "../Assets/hos3.jpg";
import Hos4 from "../Assets/hos4.jpg";
import Hos5 from "../Assets/hos5.jpg";
import Footer from './Footer';

const HospitalA = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img 
          src={HosImg} 
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
          <h1 className="text-4xl text-blue-950 font-semibold mb-8">What's Hospital Automation?</h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto shadow-xl p-8 border rounded-lg">
          Hospital automation revolutionizes patient care by streamlining processes and enhancing efficiency. With integrated systems for patient records, medication management, and staff coordination, it ensures seamless operations and reduces errors. This technology not only accelerates service delivery but also enriches patient experiences with timely and accurate care. Embracing automation in hospitals signifies a dedication to cutting-edge healthcare and improved outcomes for every patient.
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
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Control through a voice command.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              We understand that not every patient would be enthusiastic about using their smartphone, when they’re not feeling great. That’s the reason we provide complete voice-integration for automating functional elements in the room.
              </p>

              <p className="text-gray-700 font-medium leading-relaxed mt-4">
              Patients can now turn off lights, lock/unlock doors, change TV channel, or reduce the room temperature, simply by issuing a voice command. 
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
              <img src={Hos1} alt="Concept 1" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Second Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hos2} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Control using just hand gestures. </h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              For patients that don’t want to use their voice or smartphone to control the functional elements in the room, we also support hand-gesture recognition. Patients can now get things done, simply by moving their hand in a pre-defined direction. We even support muscle-movement tracking, allowing users to take actions with minimal body movement. 
              </p>
            </div>
          </div>

          {/* Third Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4 text-center">Patient Care and Safety</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              In hospitals, fire and gas sensors play a crucial role in safeguarding lives and ensuring a safe environment. These advanced sensors provide real-time alerts, enabling swift action in emergencies and preventing potential hazards. By integrating these technologies, hospitals enhance their safety protocols, offering peace of mind to patients and staff alike. 
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hos3} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          {/* Fourth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="zoom-in">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hos4} alt="Concept 4" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Get real-time notifications from patients.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              While every patient wants personal attention, it’s impossible for hospitals to scale their operations and keep track of every single patient activity. But with hospital automation, you can now push instant notifications to assigned care-takers if the patient gets unresponsive for a prolonged period or demands special attention.  
              </p>
            </div>
          </div>

          {/* Fifth Concept */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Monitor your patients from anywhere.</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              We make it easy for care-takers to track, monitor and view their patients in real-time from anywhere in the world, using their smartphone, tablet or computer.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Hos5} alt="Concept 5" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalA;
