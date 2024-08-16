import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Options from './Components/Options';
import Products from './Components/Products';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import LightControl from './Components/LightControl';
import GasValue from './Components/GasValue';
import Temperature from './Components/Temperature';
import Humidity from './Components/Humidity';
import FireDetection from './Components/FireDetection';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import ContactForm from './Components/ContactForm';
import PlantWatering from './Components/PlantWatering';
import HomeA from './Components/HomeA';
import BuildingA from './Components/BuildingA';
import OfficeA from './Components/OfficeA';
import HotelA from './Components/HotelA';
import HospitalA from './Components/HospitalA';
import IndustrialA from './Components/IndustrialA';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plant-watering" element={<PlantWatering />} />
        <Route path="/options" element={<Options user={user} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/light" element={<LightControl />} />
        <Route path="/gas" element={<GasValue />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/humidity" element={<Humidity />} />
        <Route path="/fire" element={<FireDetection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/homeA" element={<HomeA />} />
        <Route path="/buildingA" element={<BuildingA />} />
        <Route path="/officeA" element={<OfficeA />} />
        <Route path="/hotelA" element={<HotelA />} />
        <Route path="/hospitalA" element={<HospitalA />} />
        <Route path="/industrialA" element={<IndustrialA />} />
      </Routes>
    </Router>
  );
}

export default App;
