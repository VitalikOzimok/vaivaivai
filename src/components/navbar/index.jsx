import {
  RxEyeClosed,
  RxEyeNone,
  RxEyeOpen,
  RxGithubLogo,
} from "react-icons/rx";

import Food from "../../assets/food 1.png";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="fixed top-0 left-48  -ml-2 w-3/4 bg-transparent  lg:text-blue-300 xl:text-red-100 md:text-red-950 sm:block z-40 ">
      <div className=" gap-10 grid grid-cols-2 ">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-400 duration-300"
        >
          <div className="flex  flex-row p-6 ">
            <img className="h-4 " src={Food} alt="" />
            <h1 className=" text-xs px-1 text-black font-medium  hover:text-gray-400 duration-300 ">
              f.palace
            </h1>
          </div>
        </NavLink>

        <div className="w-full flex justify-end gap-5  p-6 text-black">
          <RxEyeClosed />
          <RxEyeNone />
          <RxEyeOpen />
          <RxGithubLogo />
        </div>
      </div>
      <div className="flex items-end justify-end text-sm  text-black font-medium -mt-3">
        <ul className="py-7 ">
          <li className="rotate-90">
            <NavLink
              to={"/"}
              className="  focus:text-red-300  text-black hover:text-gray-300 duration-300 active:text-violet-400"
            >
              Home
            </NavLink>
          </li>
          <li className="rotate-90 py-8">
            <NavLink
              to={"/recipe"}
              className=" focus:text-red-300 text-black  hover:text-gray-400 duration-300 active:text-violet-400"
            >
              Recipe
            </NavLink>
          </li>
          <li className="rotate-90 py-1">
            <NavLink
              to={"/favorites"}
              className=" focus:text-red-300 text-black  hover:text-gray-400 duration-300 active:text-violet-400"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
