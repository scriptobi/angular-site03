import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../datas/data_movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  listName: string;
  movies: Movie[];
  /*
  movies = Movie[
    new Movie(
      'Full Metal Alchemist',
      'Desc for Full Metal Alchemist',
      'https://vostfree.tv/uploads/posts/2020-05/1590699208_fullmetal-alchemist-vf.jpg'
    ),
    new Movie(
      'Black Clover',
      'Description de Black Clover',
      'https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg'
    )
  ]; // */

  constructor() {
    this.listName = "une liste";
    //*
    this.movies = [
      new Movie(
        'Full Metal Alchemist',
        'Desc for Full Metal Alchemist',
        'https://vostfree.tv/uploads/posts/2020-05/1590699208_fullmetal-alchemist-vf.jpg'
      ),
      new Movie(
        'Black Clover',
        'Description de Black Clover',
        'https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg'
      )
    ];// */
  }

  ngOnInit(): void {
  }

}
