
import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-sync-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="py-8 bg-sync-blue text-white text-center text-sm">
        <div className="max-container">
          <p>&copy; {new Date().getFullYear()} ScaleSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
