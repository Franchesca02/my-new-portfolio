import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";


const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
    
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">Your</span> Digital
          Presence to the Next Level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today let&apos;s discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:ihuoma.franchesca@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal pb-2 font-light">
          Copyright © 2024 Ifeyinwa
        </p>
        <div className="flex md:gap-3 gap-6 items-center">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer pb-2 flex justify-center rounded-lg border-black-300 border items-center backdrop-filter backdrop-blur-lg bg-black-200 saturate-180 bg-opacity-75">
            <a href={profile.link} target="_blank">
            <img src={profile.img} 
              alt="icons" 
              width={20}
              height={20}
              
              />
            </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
