import React from "react";
import { logoIconsList } from "../constants/index";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex justify-center items-center marquee-item">
      <img src={icon.imgPath} alt={icon.name || "logo"} loading="lazy" />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-duplicate-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
