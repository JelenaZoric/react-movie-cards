import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, onDelete, onStarClick) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} onDelete={onDelete} onStarClick={onStarClick} />
    ))}
  </div>
);

const MovieList = ({ movies, onDelete, onStarClick }) => <div>{getMovies(movies, onDelete, onStarClick)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
