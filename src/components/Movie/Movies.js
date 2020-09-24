import React, { Component } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import NewMovie from './NewMovie';

export default class Movies extends Component {
  state = {
    movies: [],
    counter: 0
  };

  componentDidMount() {
    this.setState(() => ({
      movies: MovieService.getMovies(),
      counter: this.state.movies.length + 1
    }));
  }

  addNewMovie = (title, subtitle, description, imageUrl) => {
    const newMovie = {
      id: this.state.counter * 100,
      title: title,
      subtitle: subtitle,
      description: description,
      year: 0,
      imageUrl: imageUrl,
      rating: 0
    };
    this.setState({ counter: this.state.counter + 1 });
    this.setState({movies: [...this.state.movies, newMovie]});
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: '-15px' }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <NewMovie addNewMovie={this.addNewMovie} />
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}
