/* eslint-disable @typescript-eslint/no-unused-vars */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-8 mt-10">
        {projects.map(({ id, iconLists, link, des, img, title }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]"
          >
          
            <PinContainer title={link}>
            <a href={link} target="_blank">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img src={img} alt={title} className="absolute z-10" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="line-clamp-2 lg:text-xl lg:font-normal font-light text-sms">
                {des}
              </p>

              <div className="flex justify-between items-center mb-3 mt-7">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border boder-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 w-8 h-8 flex items-center justify-center"
                      style={{transform: `translateX(-${5 * index * 2} px)`}}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Sites</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
              </a>
            </PinContainer>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
