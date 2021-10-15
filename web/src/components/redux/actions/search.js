import {
  SEARCH_START,
  SEARCH_BY_ID_START,
} from "../../const/actionTypes";

export const search = (payload) => ({ type: SEARCH_START, payload });
export const searchById = (payload) => ({
  type: SEARCH_BY_ID_START,
  payload,
});
