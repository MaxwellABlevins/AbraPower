import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Products from "../components/Sections/Products";
import Slider from "../components/Sections/Slider";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Products />
      <Services />
      <Slider />
      <Contact/>
      <Footer />
    </>
  );
}

//<Pricing /> <Contact />



