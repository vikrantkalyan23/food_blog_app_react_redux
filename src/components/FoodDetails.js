import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FoodDetails = () => {
  const { id } = useParams();
  const foodItem = useSelector((state) =>
    state.food.foodItems.find((item) => item.id === parseInt(id))
  );

  if (!foodItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{foodItem.name}</h1>
      <img
        src={`images/${foodItem.image}`}
        alt={foodItem.name}
        className="img-fluid"
      />
      <p>{foodItem.details}</p>
      <h3>Recipe</h3>
      <p>{foodItem.recipe}</p>
    </div>
  );
};

export default FoodDetails;
