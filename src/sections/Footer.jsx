import React from "react";
import { socialImgs } from "../constants";

// const socialImgs = [
//   { url: "https://twitter.com", imgPath: "/images/twitter.png" },
//   { url: "https://facebook.com", imgPath: "/images/facebook.png" },
// ];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} loading="lazy" />
            </a>
          ))}
        </div>

        {/* <div className="flex flex-col justify-center items-center ">
          <p className="text-center md:text-end ">
            © {new Date().getFullYear()} 
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
