import React from 'react';
//import { Link } from 'react-router-dom';

import Landing from './Landing';
//import Products from './Products';
import AppWorking from './AppWorking';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';
import Landing1 from './Landing1';
import Landing2 from './Landing2';

function Dashboard() {
  return (
   <div>
       <ImageCarousel />
       <Landing />
       <Landing1 />
       <AppWorking />
       <Landing2 />
       <Footer />
   </div>
  );
}

export default Dashboard;
