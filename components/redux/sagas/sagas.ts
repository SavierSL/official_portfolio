import { all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { StringDecoder } from "string_decoder";
import * as type from "../actions/types";

function* hoverCursor(action: any) {
  yield put({ type: type.CURSOR_HOVERED, payload: "hovered" });
}
function* watchHoverCursor() {
  yield takeEvery(type.CURSOR_HOVERED_SAGA, hoverCursor);
}
function* pointerCursor(action: any) {
  yield put({ type: type.CURSOR_POINTER, payload: "pointer" });
}
function* watchPointerCursor() {
  yield takeEvery(type.CURSOR_POINTER_SAGA, pointerCursor);
}

export default function* rootSaga() {
  yield all([watchHoverCursor(), watchPointerCursor()]);
}
