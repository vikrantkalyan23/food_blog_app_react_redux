import { SET_FOOD_ITEMS } from "../actions/foodActions";

const initialState = {
  foodItems: []
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD_ITEMS:
      return { ...state, foodItems: action.payload };
    default:
      return state;
  }
};
