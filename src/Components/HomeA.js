import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeImg from "../Assets/home.jpeg";
import Footer from './Footer';
import Home1 from "../Assets/home1.jpg";
import Home2 from "../Assets/home2.png";
import Home3 from "../Assets/home3.jpg";
import Home4 from "../Assets/home4.jpg";
import Home5 from "../Assets/home5.webp";
import Home6 from "../Assets/home6.webp";

const HomeA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
      <div className="relative w-full">
        <img 
          src={HomeImg} 
          alt="homeImg" 
          className="w-full h-[90vh] object-cover"  // Adjust height here
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 md:px-8" data-aos="fade-up">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center">Home Automation Concepts</h1>
            <p className="text-xl lg:text-xl">Wondering where to get started? Browse through our home automation concepts to get a feel of the smart home experience.</p>
          </div>
        </div>
      </div>

      <div className="m-16 p-10 ">

      <div className="p-2" data-aos="fade-up" >
      <h1 className="p-3 text-blue-950 text-center text-4xl font-semibold">Home Automation Concepts</h1>
      </div>
      <div className="border shadow-lg rounded-lg mb-20" data-aos="zoom-in" data-aos-delay="200">
          <p className="p-3 py-5 text-center text-gray-800 font-medium">Home automation is the art of weaving technology into the fabric of daily life, creating a seamless and intuitive living experience. It transforms your home into a responsive, intelligent environment, where lights, climate, security, and appliances harmoniously adjust to your needs. With automation, comfort and convenience are at your command, turning routine tasks into effortless delights. Experience a home that anticipates your desires and enhances every moment with elegance and efficiency. Welcome to a new era of living, where technology and tranquility blend perfectly.</p>
        </div>



      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="zoom-in">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home1} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Light Controlling</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Light automation brings a touch of elegance to your home, seamlessly adjusting illumination to match your mood and activities. It enhances comfort and efficiency, effortlessly blending convenience with style. Experience the beauty of a home that lights up to your rhythm, creating the perfect ambiance at every moment.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="zoom-out">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Temperature Monitoring</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Monitoring temperature  is crucial for maintaining comfort, optimizing energy usage, and ensuring health and safety. Proper temperature control helps reduce energy costs by efficiently managing heating and cooling systems. It also prevents issues like mold growth from excessive humidity or health problems from extreme temperatures.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home2} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home3} alt="Concept 2" className="w-[300px] h-[350px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Plant Watering</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              A plant watering system transforms your home into a lush oasis, effortlessly nurturing each green companion with precision and care. It ensures your plants thrive in a perfectly hydrated environment, enhancing your space with vibrant life. Enjoy the serene beauty of a flourishing garden, tended to with grace and ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Gas Monitoring</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Gas control in the home ensures a safe and serene environment, where peace of mind comes with every breath. With precise monitoring, it prevents leaks and hazards, seamlessly integrating safety into your daily life. Embrace a worry-free atmosphere, where every gas flame is managed with care and sophistication.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home4} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="fade-left">
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home5} alt="Concept 2" className="w-auto h-[300px] rounded-md shadow-lg" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Fire Detection
              </h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Fire control in the home creates a sanctuary of safety and serenity, where the warmth of flames is embraced without fear. It meticulously monitors for potential dangers, ensuring your haven remains secure. Revel in the peace of mind that comes with a vigilant guardian, protecting your home from the unpredictable nature of fire.
              </p>
            </div>
          </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-10 lg:space-y-0 mt-20" data-aos="fade-right">
            <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-950 mb-4">Humidity Monitoring</h2>
              <p className="text-gray-700 font-medium leading-relaxed">
              Monitoring humidity at home ensures a balanced and comfortable living environment, preventing the growth of mold and mildew while safeguarding your health. It enhances air quality, making each breath a refreshing delight and protecting your home's structure and furnishings from damage. Embrace a harmonious home atmosphere by keeping humidity levels just right.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img src={Home6} alt="Concept 3" className="w-auto h-[350px] rounded-md shadow-lg" />
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeA;
