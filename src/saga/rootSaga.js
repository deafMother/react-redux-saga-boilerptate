import { put, all } from "redux-saga/effects";

// import history from "../history";
import axios from "../api";
import history from "../history";

// watch for the action types
function* watchSaga() {}

// only export the root sage
export default function* rootSaga() {
  yield all([watchSaga()]);
}
