import React from "react";

const MovieTable = ({ movies, onCheckboxChange, selectedMovies }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Title</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.imdbID}>
            <td>
              <input
                type="checkbox"
                checked={selectedMovies.includes(movie.Title)}
                onChange={() => onCheckboxChange(movie.Title)}
              />
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
