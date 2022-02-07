import { Injectable } from '@angular/core';
import { Movie } from './models/movie';
import { MOVIES } from './datas/data_movies';

@Injectable()
export class MovieService {
  constructor() {}

  getMovies(): Movie[] { return MOVIES; }
  /*
  getMovie(title: string): Movie {
    return MOVIES.find(movie => movie.title === title);
  }// */
}
