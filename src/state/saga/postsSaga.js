import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { postsActions } from "../actions/postsActions";

export function* getPostsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts",
      action.params
    );
    // console.log(page)
    // const countOfPages = Math.ceil(response.headers["x-total-count"] / limit);
    // console.log(countOfPages);
    yield put({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({ type: "POSTS_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(postsActions.SET_POSTS, getPostsSaga);
}
