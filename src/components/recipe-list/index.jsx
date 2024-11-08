import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="hover:scale-105 duration-200">
      <Link to={`/recipe-item/${item?.id}`}>
        <div className="flex flex-col w-64  p-1 bg-white shadow-xl gap-5 border-2 rounded-2xl border-white">
          <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={item?.image_url} className="block  w-full" />
          </div>
          <div className="p-2">
            <div className="flex flex-row justify-between">
              <h1>{item.title}</h1>
              <h1>8.0</h1>
            </div>
            <div className="flex justify-between pt-2 items-center">
              <Link
                to={`/recipe-item/${item?.id}`}
                className="text-xs  flex h-5 justify-center items-center  w-28  rounded-full  bg-gray-200  uppercase  tracking-wider"
              >
                Recipe Details
              </Link>
              <h3 className="text-orange-400 italic text-xs">
                {item.publisher}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
