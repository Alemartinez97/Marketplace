import {
  SEARCH_COMPLETE,
  SEARCH_ERROR,
  SEARCH_START,
  SEARCH_BY_ID_COMPLETE,
  SEARCH_BY_ID_ERROR,
  SEARCH_BY_ID_START,
} from "../../const/actionTypes";

const initialState = {};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return { ...state, isLoading: true };
      break;
    case SEARCH_ERROR:
      return { ...state, isLoading: false, Results: null };
      break;
    case SEARCH_COMPLETE:
      return { ...state, isLoading: false, Results: action.result.data };
      break;
    case SEARCH_BY_ID_START:
      return { ...state, isLoading: true, Result: null };
      break;
    case SEARCH_BY_ID_ERROR:
      return { ...state, isLoading: false, Result: null };
      break;
    case SEARCH_BY_ID_COMPLETE:
      return { ...state, isLoading: false, Result: action.item.data };
      break;
    default:
      return { ...state };
  }
};
export default Search;
