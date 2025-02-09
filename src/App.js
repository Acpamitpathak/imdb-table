import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, toggleSelectedMovie, filterMovies } from "./store/movieSlice";
import MovieTable from "./components/MovieTable";

const App = () => {
  const dispatch = useDispatch();
  const { movies, selectedMovies } = useSelector((state) => state.movies);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Fetch all movies on mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://www.omdbapi.com/", {
          params: {
            apikey: "7ae81f07", // Replace with your actual API key
            s: "batman", // Example query
          },
        });

        // Dispatch to store the fetched movies
        dispatch(setMovies(response.data.Search));
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching movie data.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, [dispatch]);

  // Toggle checkbox selection
  const handleCheckboxChange = (imdbID) => {
    dispatch(toggleSelectedMovie(imdbID)); // Toggle movie selection
  };

  // Handle filtering of selected movies and make an API call
  const handleFilter = async () => {
    try {
      const response = await axios.post("http://your-api.com/filter", {
        selectedMovies, // Send the selected movie IDs to the API
      });

      // Assuming the API returns the filtered movie data
      dispatch(filterMovies(response.data.filteredMovies)); // Dispatch filtered movies to Redux store
    } catch (err) {
      setError("Error filtering movies.");
    }
  };

  return (
    <div>
      <h1>IMDB Movie Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <button onClick={handleFilter}>Filter Selected Movies</button>
          <MovieTable movies={movies} onCheckboxChange={handleCheckboxChange} selectedMovies={selectedMovies} />
        </>
      )}
    </div>
  );
};

export default App;
