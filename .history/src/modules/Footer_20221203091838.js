import React from "react";
import { NavLink } from "react-router-dom";

const icons = ["/instagram.png", "/twitter.png", "/slack.png", "/meta.png"];
const Footer = () => {
  return (
    <div className="w-full bg-primary bg-opacity-5 z-10">
      <div className="container p-10 pb-0 flex flex-col gap-y-5">
        
        <div className="flex justify-between w-full pb-5">
          <NavLink to="/" className={"w-[50px] h-[50px]"}>
            <img src="/qora.png" alt="" className="w-full h-full" />
          </NavLink>
          <div className="flex gap-x-2 items-center bg-primary rounded-[25px] text-white px-5 py-3 text-sm">
            <img src="/webflow.png" alt="" className="w-5 h-5" />
            <span>Follow on webflow</span>
          </div>
        </div>
        <div className="flex lg:gap-x-[100px] md:gap-x-[40px] mb-10 text-sm">
          <div className="flex flex-col gap-y-10 max-md:hidden">
            <div>
              <h3 className="mb-5 md:text-lg font-medium text-dark">
                Follow our Socials
              </h3>
              <div className="flex gap-x-5">
                {icons.map((icon, index) => (
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-dark socials"
                    key={index}
                  >
                    <img src={icon} alt="" className="w-[50%] h-[50%]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:flex sm:justify-between sm:flex-1 w-full grid grid-cols-2 gap-10">
            <div>
              <h3 className="mb-5 text-lg font-semibold text-dark">Company</h3>
              <ul className="flex flex-col font-medium gap-y-3 text-text2">
                <li>About Us</li>
                <li>Press</li>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-dark">
                Cloneables
              </h3>
              <ul className="flex flex-col font-medium gap-y-3 text-text2">
                <li>All product</li>
                <li>Templates</li>
                <li>Assets</li>
                <li>UI Kits</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-dark">
                Resources
              </h3>
              <ul className="flex flex-col font-medium gap-y-3 text-text2">
                <li>Learning centre</li>
                <li>Promotion</li>
                <li>Inspiration</li>
                <li>Videos</li>
                <li>Submit</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-dark">Store</h3>
              <ul className="flex flex-col font-medium gap-y-3 text-text2">
                <li>View the Store</li>
                <li>Forest UI Kit</li>
                <li>Otto Template</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-between justify-center py-5 text-sm">
          <div className="flex items-center gap-x-3">
            <strong className="font-semibold">
              Copyright &#169; 2022 DevDT
            </strong>
            <span className="w-[5px] h-[5px] rounded-full bg-text1 bg-opacity-50"></span>
            <span className="font-medium text-text1">Powered by @DevDT</span>
          </div>
          <div className="flex items-center font-medium text-text1 gap-x-3 max-md:hidden">
            <p>Privacy policy</p>
            <span className="w-[5px] h-[5px] rounded-full bg-text1 bg-opacity-30"></span>
            <p>Affiliate Notice</p>
            <span className="w-[5px] h-[5px] rounded-full bg-text1 bg-opacity-30"></span>
            <p>Press Kit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
