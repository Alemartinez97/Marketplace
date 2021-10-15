import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_COMPLETE,
  SEARCH_ERROR,
  SEARCH_START,
  SEARCH_BY_ID_COMPLETE,
  SEARCH_BY_ID_ERROR,
  SEARCH_BY_ID_START,
} from "../../const/actionTypes";

import { apiCall } from "../api/index";
export function* searchItems({ payload }) {
  try {
    const result = yield call(
      apiCall,
      `/items/?query=${payload.search}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_COMPLETE, result });
  } catch (error) {
    yield put({ type: SEARCH_ERROR, error });
  }
}
export function* searchItemById({ payload }) {
  try {
    const item = yield call(
      apiCall,
      `/item/${payload.id}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_BY_ID_COMPLETE, item });
  } catch (error) {
    yield put({ type: SEARCH_BY_ID_ERROR, error });
  }
}
export default function* search() {
  yield takeLatest(SEARCH_START, searchItems);
  yield takeLatest(SEARCH_BY_ID_START, searchItemById);
}
