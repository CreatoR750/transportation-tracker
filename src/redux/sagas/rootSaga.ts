import { all } from "redux-saga/effects";
import ordersSaga from "./ordersSaga";
import pathSaga from "./pathSaga";

export default function* rootSaga() {
    yield all([
      pathSaga(),
      ordersSaga()
    ])
  }