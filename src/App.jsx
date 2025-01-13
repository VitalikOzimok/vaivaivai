import "./App.css";
import Home from "./page/home";

import Details from "./page/details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
