import "./App.css";
import Home from "./page/home";
import NavBar from "./components/navbar";
import Favorites from "./page/favorites";
import Details from "./page/details";
import Recipe from "./page/recipe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
