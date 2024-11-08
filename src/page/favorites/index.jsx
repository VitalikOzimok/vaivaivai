import { useContext } from "react";
import RecipeItem from "../../components/recipe-list";
import { GlobalContext } from "../../components/context";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-16 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList ? (
        favoriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
