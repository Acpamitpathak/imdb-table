import { createStore } from 'redux';

// Define initial state
const initialState = {
  movies: [],
  selectedMovies: [],  // Array to store the selected movies
};

// Action Types
const SET_MOVIES = 'SET_MOVIES';
const TOGGLE_SELECTED_MOVIE = 'TOGGLE_SELECTED_MOVIE';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case TOGGLE_SELECTED_MOVIE:
      // If movie is already selected, remove it, else add it
      const newSelectedMovies = state.selectedMovies.includes(action.payload)
        ? state.selectedMovies.filter(id => id !== action.payload)
        : [...state.selectedMovies, action.payload];
      return { ...state, selectedMovies: newSelectedMovies };
    default:
      return state;
  }
};

// Create Store
const store = createStore(reducer);

// Action Creators
export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const toggleSelectedMovie = (movieId) => ({
  type: TOGGLE_SELECTED_MOVIE,
  payload: movieId,
});

// Default Export (Store)
export default store;
