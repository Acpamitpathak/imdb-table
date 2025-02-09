import { createSlice } from '@reduxjs/toolkit';

// Initial state for movies
const initialState = {
  movies: [], // Store all movie data
  selectedMovies: [], // Store selected movies
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload; // Set all movies
    },
    toggleSelectedMovie: (state, action) => {
      const movieId = action.payload;
      const movieIndex = state.selectedMovies.indexOf(movieId);

      if (movieIndex === -1) {
        state.selectedMovies.push(movieId); // Add to selected
      } else {
        state.selectedMovies.splice(movieIndex, 1); // Remove from selected
      }
    },
    // This action filters the movies by selected movies' IDs
    filterMovies: (state, action) => {
      state.movies = action.payload; // Set filtered movies from API response
    },
  },
});

export const { setMovies, toggleSelectedMovie, filterMovies } = movieSlice.actions;
export default movieSlice.reducer;
