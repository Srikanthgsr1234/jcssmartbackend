import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import bellImage from '../Assets/bell.jpg';
import CamImage from '../Assets/cam.jpg';
import LightImage from '../Assets/lights.avif';
import TempImage from '../Assets/temperatue1.jpg';
import gasImage from '../Assets/gassensor.jpg';
import doorlockImage from '../Assets/doorlock.webp';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: bellImage,
    title: 'Smart Door Bells',
  },
  {
    id: 2,
    image: CamImage,
    title: 'Security Cameras',
  },
  {
    id: 3,
    image: LightImage,
    title: 'Smart Lights',
  },
  {
    id: 4,
    image: TempImage,
    title: 'Smart Temperature Detectors',
  },
  {
    id: 5,
    image: gasImage,
    title: 'Smart Gas Detectors',
  },
  {
    id: 6,
    image: doorlockImage,
    title: 'Smart Door Locks',
  },
];

const Products = () => {
  return (
    <div className="pt-20 px-4 sm:px-4 lg:px-6">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Products</h1>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="rounded-lg overflow-hidden flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: product.id * 0.2 }}
            >
              <LazyLoadImage
                className="w-72 h-60 rounded-lg"
                src={product.image}
                alt={product.title}
                effect="blur" // You can also use "opacity" or "black-and-white"
              />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold mb-4">{product.title}</h2>
                <Link
                  to="/contactform"
                  className="inline-block text-md font-medium px-3 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition duration-300 hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
