import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import landingImage from '../Assets/landing.jpg';

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div className="relative h-[600px] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-6">
      <div
        className="flex flex-col items-start lg:items-start lg:w-1/2 mb-8 lg:mb-0"
        data-aos="fade-up"
      >
        <h1 className="text-3xl lg:text-5xl font-semibold mb-4">Starter Kits</h1>
        <h2 className="text-xl lg:text-xl font-medium mb-6" data-aos="fade-up" data-aos-delay="100">
          New to JCS? Browse our curated Bundles
        </h2>
        <Link
          to="/products"
          className="text-xl lg:text-2xl px-4 py-2 rounded-lg font-bold bg-blue-950 text-white inline-block hover:bg-gray-100 transition-colors duration-300 hover:scale-105"
          data-aos="fade-up" data-aos-delay="200"
        >
          Shop Now
        </Link>
      </div>

      <div
        className="flex items-center justify-center lg:w-1/2"
        data-aos="fade-left"
      >
        <LazyLoadImage
          className="w-full max-w-md lg:max-w-full h-auto rounded-lg"
          src={landingImage}
          alt="landing"
          effect="blur"
        />
      </div>
    </div>
  );
}

export default Landing;
