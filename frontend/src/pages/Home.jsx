import React from "react";
// import HeroSection from "../components/HeroSection";
// import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import ContentWithImageSection from "../components/ContentWithImageSection";
import ContentWithImageSectionLeft from "../components/ContentWithImageSectionLeft";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContentWithImageSectionLeft />
      <ContentWithImageSection />
    </div>
  );
};

export default Home;
