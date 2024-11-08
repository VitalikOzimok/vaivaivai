import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  return (
    <div className="container top-0  pl-24 mt-20 w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div></div>
        <div>
          <span className="text-2xl font-semibold text-black underline">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li className="font-semibold text-2xl">
                <span className="text-orange-400 ">{ingredient.quantity} </span>
                <span>{ingredient.unit}</span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
        className="active:bg-yellow-50 active:text-orange-400 duration-300 text-white ml-10 mb-5 w-44 h-12 rounded-full drop-shadow-3xl bg-orange-400"
      >
        {favoritesList &&
        favoritesList.length > 0 &&
        favoritesList.findIndex(
          (item) => item.id === recipeDetailsData?.recipe?.id
        ) !== -1
          ? "Remove from favorites"
          : "Add to favorites"}
      </button>
    </div>
  );
}
