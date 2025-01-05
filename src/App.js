import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
