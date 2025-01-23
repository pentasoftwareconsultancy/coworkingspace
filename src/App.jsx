import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import WorkspaceListings from './components/card/WorkspaceListings';
import Home from './pages/Home';
import SeatingPlansAndFeatures from './pages/SeatingPlansAndFeatures';
import Ameneties from './components/ameneties/Ameneties';
import Benefits from './components/benefits/Benefits';
import PricingPlan from './components/pricingplan/PricingPlan';
import Contactus from './components/contactus/Contactus';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Ameneties />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/workspaceListing" element={<WorkspaceListings/>} />
        <Route path="/seatingplans/:id" element={<SeatingPlansAndFeatures/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
