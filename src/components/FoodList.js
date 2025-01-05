import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../redux/actions/foodActions";
import { Link } from "react-router-dom";

const FoodList = () => {
  const dispatch = useDispatch();
  const foodItems = useSelector((state) => state.food.foodItems);

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h1>Food Blog</h1>
      <div className="row">
        {foodItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4">
              <img
                src={`images/${item.image}`}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/food/${item.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
