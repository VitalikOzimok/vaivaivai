import { useContext } from "react";
import RecipeItem from "../../components/recipe-list";
import { GlobalContext } from "../../components/context";

export default function SearchRecipe() {
  const { searchParam, setSearchParam, handleSubmit, posts, loading } =
    useContext(GlobalContext);
  console.log(searchParam);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 z-41 z-100  px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-orange-100 focus:shadow-orange-400 hover:shadow-orange-200 duration-200"
        />
      </form>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {posts ? (
          posts.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center">
              Nothing to show. Please search something
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
