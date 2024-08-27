import React from "react";
import video from "../video/realityaddon_video1.mp4";
// import video from "../video/reailityaddon_video1.mp4";

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center text-white flex items-center justify-center">
      <div class="container mx-auto ">
        <video
          class="w-[100vw]"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
