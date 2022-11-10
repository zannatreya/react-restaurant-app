import React from "react";
// import data
import { heroData } from "../data";
// import components
import Header from "./Header";

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        hero
      </div>
    </section>
  );
};

export default Hero;
