import React, { useState } from "react";

import "./style.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import data from "../../data/data";

export default function slideSccroller() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNext() {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  }

  console.log(data);

  return (
    <div className=" flex flex-col justify-center items-center  m-auto">
      <div className="flex flex-row justify-center items-center gap-20">
        {data && data.length
          ? data.map((el, index) => (
              <div className={currentSlide === index ? "w-72 h-60 " : "suka"}>
                <img key={el.id} src={el.img} />
              </div>
            ))
          : null}

        {data && data.length
          ? data.map((el, index) => (
              <div className={currentSlide === index ? " " : "suka"}>
                <h1 className="text-3xl font-medium mb-3 ">{el.first_name}</h1>
                <h2 className="text-xl font-serif text-gray-300 mb-3">
                  {" "}
                  {el.last_name}
                </h2>
                <h3 className="italic  text-orange-400"> {el.email}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-row  absolute gap-1 pt-32">
        <div className=" bg-white ">
          <SlArrowLeft onClick={handleNext} className=" text-black p-1" />
        </div>
        <div className=" bg-white">
          <SlArrowRight onClick={handlePrevious} className="text-black p-1" />
        </div>
      </div>
      <span className="pb-7 flex gap-4">
        {data && data.length
          ? data.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "bg-red-500 h-2 w-2 border-white border rounded-full cursor-pointer "
                    : "bg-black rounded-3xl border border-hhite h-2 w-2 cursor-pointer"
                }
                onClick={() => setCurrentSlide(index)}
              />
            ))
          : null}
      </span>
    </div>
  );
}
