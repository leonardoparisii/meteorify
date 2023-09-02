"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Wheater = ({ data }) => {
  const [currentHour, setCurrentHour] = useState("");
  useEffect(() => {
    const getCurrentHour = () => {
      const date = new Date();
      const hour = date.getHours();
      const minutes =
        date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
      const total = `${hour}:${minutes}`;
      setCurrentHour(total);
    };
    getCurrentHour();
    setInterval(getCurrentHour);
  }, []);

  const date = new Date();
  let hour = date.getHours();
  console.log(data);
  let iconId = data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  return (
    <div>
      <div className="relative w-full flex justify-center flex-col gap-4 mt-6 font-satoshi px-12 sm:px-16 py-6 sm:py-16 border-opacity-30 border-cyan-950 border rounded-3xl backdrop-blur-3xl bg-slate-950 bg-opacity-10">
        <div className="flex items-center justify-between md:flex-row flex-col w-full">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl">
              {data.name}, {data.sys.country}
            </h1>
            <Image width={48} height={48} src={iconUrl} />
          </div>
          <p className="text-xl sm:text-2xl ">
            {currentHour} {hour > 0 && hour < 12 ? "A.M." : "P.M."}
          </p>
        </div>
        <div className="flex w-full gap-4 justify-between">
          <h1 className=" text-6xl sm:text-7xl font-normal flex items-center">
            {Math.floor(data.main.temp)} <span className="text-5xl">°C</span>
          </h1>
          <div className="flex flex-col">
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-400 text-md sm:text-lg">
                Perceived:
              </span>
              <span className="text-sm sm:text-md">
                {Math.floor(data.main.feels_like)} °C
              </span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-400 text-md sm:text-lg">
                Humidity:
              </span>
              <span className="text-sm sm:text-md">{data.main.humidity} %</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span className="text-slate-400 text-md sm:text-lg">Wind:</span>
              <span className="text-sm sm:text-md" translate="no">
                {data.wind.speed} km/h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheater;
