export const FETCH_FOOD_ITEMS = "FETCH_FOOD_ITEMS";
export const SET_FOOD_ITEMS = "SET_FOOD_ITEMS";

export const fetchFoodItems = () => ({ type: FETCH_FOOD_ITEMS });
export const setFoodItems = (foodItems) => ({ type: SET_FOOD_ITEMS, payload: foodItems });
