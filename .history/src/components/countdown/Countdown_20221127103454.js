import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const Countdown = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countdown = () => {
    const destination = new Date("Dec 10 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (different % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minute = Math.floor((different % (60 * 60 * 1000)) / (60 * 1000));
      const second = Math.floor((different % (60 * 1000)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    });
  };
  useEffect(() => {
    countdown();
  });

  const timer = [
    [days, "DAYS"],
    [hours, "HOURS"],
    [minutes, "MINUTES"],
    [seconds, "SECONDS"],
  ];
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center gap-y-10 countdown relative mb-10">
      {/* <span className="absolute -bottom-[100px] -left-[40px] w-[500px] ">
      <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
  <path fill="#474bff" d="M401.5,342Q358,444,258.5,412Q159,380,90.5,310Q22,240,80,152Q138,64,237.5,68Q337,72,391,156Q445,240,401.5,342Z" />
</svg>

      </span>
      <span className="absolute -right-[0px] -top-[70px] w-[500px] ">
        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="#474bff"
            d="M394.5,343Q359,446,258.5,414.5Q158,383,82.5,311.5Q7,240,73,152Q139,64,247,52.5Q355,41,392.5,140.5Q430,240,394.5,343Z"
          />
        </svg>
      </span> */}
      <div className="glitch-wrapper">
        <div className="glitch" data-glitch="SALE COUNTDOWN TIMER">
          SALE COUNTDOWN TIMER
        </div>
        
      </div>
      <div className="flex sm:gap-x-10 gap-3">
        {timer.map((time, index) => (
          <div
            className="flex flex-col gap-y-3 items-center justify-center text-white md:w-[150px] md:h-[150px] sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] timer"
            key={index}
          >
            <span className="md:text-[60px] sm:text-[45px] text-[30px] font-medium z-10 sm:pb-10 pb-5">
              {time[0] < 10 ? `0${time[0]}` : time[0]}
            </span>
            <span className="md:text-[14px] sm:text-[12px] text-[10px] font-medium z-10 absolute bottom-0 left-0 flex items-center justify-center w-full md:h-[40px] sm:h-[30px] h-[25px] text-center text-primary bg-white">
              {time[1]}
            </span>
          </div>
        ))}
      </div>
      <Button className="w-[120px] z-10 sm:text-[14px] text-sm max-sm:py-3">
        <NavLink to={"/shop"}>Visit Store</NavLink>
      </Button>
      <div className="blob"></div>
    </div>
  );
};

export default Countdown;
