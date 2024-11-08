import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setPosts(data?.data?.recipes);
        setLoading(false);
      }
      console.log(posts);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
    console.log(posts);
  }
  useEffect(() => {
    handleSubmit();
  }, []);

  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoriteList.push(getCurrentItem);
    } else {
      cpyFavoriteList.splice(index);
    }
    setFavoriteList(cpyFavoriteList);
  }
  console.log(favoriteList, "favoriteList");

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        favoriteList,
        loading,
        posts,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
