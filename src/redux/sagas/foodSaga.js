import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_FOOD_ITEMS, setFoodItems } from "../actions/foodActions";

function* fetchFoodItemsSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:3001/foodItems");
    yield put(setFoodItems(response.data));
  } catch (error) {
    console.error("Error fetching food items:", error);
  }
}

export function* foodSaga() {
  yield takeEvery(FETCH_FOOD_ITEMS, fetchFoodItemsSaga);
}
