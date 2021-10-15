import { get } from "lodash";

export const isSearchLoading = (state) => get(state, "search.isLoading");
export const Results = (state) => get(state, "search.Results.item");
export const Detail = (state) => get(state, "search.Result.item");