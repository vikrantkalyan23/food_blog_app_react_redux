import { all } from "redux-saga/effects";
import { foodSaga } from "./foodSaga";

export function* rootSaga() {
  yield all([foodSaga()]);
}
