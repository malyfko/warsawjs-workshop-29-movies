import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "../../interfaces/Movie.interface";

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {

  public movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  async setupMovie() {
    const id = Number(this.route.snapshot.params.id);
    this.movie = await this.moviesService.getMovieById(id);
  }

  ngOnInit() {
    this.setupMovie();
  }

}
