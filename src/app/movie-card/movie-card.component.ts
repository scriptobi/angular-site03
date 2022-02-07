import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movie: Movie;
  movieTitle: string;
  movieDesc: string;
  movieImg: string;

  constructor() {
    this.movie = new Movie();
    this.movieTitle = "titre par defaut";
    this.movieDesc = "";
    this.movieImg = "";
  }
  //constructor(movie) {}
  /*
  constructor(movieTitle: string, movieDesc: string, movieImg: string) {
    this.title = movieTitle;
    this.desc = movieDesc;
    this.img = movieImg;
  }// */

  ngOnInit(): void {
  }

}
