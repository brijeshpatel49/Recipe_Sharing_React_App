import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home";
import { CreateRecipe } from "./pages/create-recipe";
import {Login} from './pages/Login';
import { Register } from "./pages/Register";
import { SavedRecipes } from "./pages/SavedRecipes";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="page-container"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
