import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import postsReducer from "./reducers/postsSlice";
import pagesReducer from "./reducers/pagesSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/postsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    pages: pagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);
