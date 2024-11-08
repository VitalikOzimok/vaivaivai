import Image from "../../assets/Image 4.png";
import Kus from "../../assets/6.png";
import Food from "../../assets/food 1.png";
import KusTwo from "../../assets/2.png";
import { CiFacebook, CiGlobe, CiHeart } from "react-icons/ci";
import KusFor from "../../assets/5.png";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { AiFillAlipayCircle, AiFillDollarCircle } from "react-icons/ai";
import BloodTwo from "../../assets/bloodtwo.png";
import Smile from "../../assets/vaadin_smiley-o.png";

import ScrollSlider from "../../components/slideScroll";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen py-28 ">
        <div className="flex flex-row  justify-center py-12 px-48">
          <div>
            <h1 className="text-orange-400 font-medium">___ Restoran</h1>
            <div className="flex flex-row pt-4">
              <h1 className=" font-bold text-5xl  ">Good F</h1>
              <img className="h-9 mt-3" src={BloodTwo} alt="" />
              <img className="h-9 mt-3 -ml-1" src={BloodTwo} alt="" />
              <h1 className="font-bold text-5xl">d</h1>
            </div>
            <div className="flex flex-row">
              <h1 className="font-bold text-7xl">Good M</h1>
              <img className="h-9 mt-8 " src={Smile} alt="" />
              <img className="h-9 mt-8" src={Smile} alt="" />
              <h1 className="font-bold text-7xl">d</h1>
            </div>
            <p className="italic pt-4">
              The food palace is an neighboorhood restaurent serving seasonal
              global cuisine driven by the faire
            </p>
            <button className="text-white mt-4 w-44 h-12 rounded-full drop-shadow-3xl bg-orange-400">
              Explore food Menu
            </button>
            <div className="flex ml-12 pt-6 gap-3 ">
              <AiFillAlipayCircle className="drop-shadow-3xl" />
              <AiFillDollarCircle className="drop-shadow-3xl" />
              <AiOutlineAliwangwang className="drop-shadow-3xl" />
            </div>
          </div>
          <img className="h-2/4 w-2/4 " src={Image} alt="" />
        </div>
        <img
          className="absolute inset-0  h-36 mx-auto drop-shadow-2xl"
          src={Kus}
          alt=""
        />
      </div>
      <div className="bg-gradient-to-r from-amber-200 flex flex-col justify-center items-center h-full text-black">
        <div className="text-center pt-10 ">
          <h1 className="text-orange-400 text-lg font-medium">Recipes</h1>
          <h2 className="text-5xl font-bold">Most Popular Items</h2>
        </div>
        <div className="pt-20">
          <ScrollSlider />
        </div>
        <div className="pb-10">
          <button className="text-white mt-4 w-44 h-12 rounded-full drop-shadow-3xl bg-orange-400">
            See More Recipe
          </button>
        </div>
      </div>
      <div className=" absolute inset-y-44 drop-shadow-2xl py-96">
        <img className="h-28" src={KusTwo} alt="" />
      </div>

      <div className=" ">
        <div className="flex flex-row justify-center text-xs font-mono gap-10 h-44  items-center">
          <div className="flex flex-col gap-2  ">
            <div className="flex gap-1 ">
              <img className="h-4" src={Food} alt="" />
              <h1 className="">f.palace</h1>
            </div>
            <div className="flex gap-1">
              <CiFacebook className="h-4 w-4" />
              <h1>Info@food_palace.com</h1>
            </div>
            <div className="flex gap-1">
              <CiGlobe className="h-4 w-4" />
              <h1>Sdfsdfsdfsd</h1>
            </div>
            <h1></h1>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold">Our Menu</h1>

            <h1>Breakfast</h1>
            <h1>Lunce</h1>
            <h1>Dinner</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Information</h1>

            <h1>About us</h1>
            <h1>Testimonial</h1>
            <h1>Event</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Useful Links</h1>

            <h1>Services</h1>
            <h1>Support</h1>
            <h1>Conditions</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Social Handles</h1>

            <h1 className="underline">Facebook</h1>
            <h1 className="underline">Twitter</h1>
            <h1 className="underline">Youtube</h1>
          </div>
        </div>
        <div className="text-center text-xs pb-5 font-mono flex gap-1 justify-center">
          <h2>Created by Vital Oz.</h2>
          <h2 className="text-orange-300">All rights reserved</h2>
        </div>
      </div>
    </div>
  );
}
