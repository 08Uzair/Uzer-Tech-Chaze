import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";
const Hero = () => {
  return (
    <>
      <div className="grid">
        <div></div>
        <div>
          <Section1 />
          <Section2 />
          <Section3/>
          <Section4/>
          <Footer/>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Hero;
