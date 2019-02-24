import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/Movie.interface';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) { }

  async ngOnInit() {
    this.movies = await this.getMovies();
  }

  getMovies() {
    return this.moviesService.fetchMovies();
  }

}
