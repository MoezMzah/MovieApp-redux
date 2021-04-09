import { ADD_MOVIES, GET_SEARCH_INPUT, GET_INPUT_RATE } from "../constantes";
export const Add_Movies = (newMovie) => ({
  type: ADD_MOVIES,
  payload: newMovie,
});
export const handle_Input_Search = (searchInput) => ({
  type: GET_SEARCH_INPUT,
  payload: searchInput,
});
export const handle_Input_Rate = (searchRate) => ({
  type: GET_INPUT_RATE,
  payload: searchRate,
});
