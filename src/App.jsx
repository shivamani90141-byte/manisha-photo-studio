import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Works from "./sections/Works";
import BookingProcess from "./sections/BookingProcess";
import Timing from "./sections/Timing";
import FAQs from "./sections/FAQs";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Works />
      <BookingProcess />
      <Timing />
      <FAQs />
      <Footer />
    </>
  );
};

export default App;
