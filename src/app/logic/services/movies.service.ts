import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Movie } from "../interfaces/Movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchMovies() {
    return <Promise<Movie[]>>this.http.get(environment.moviesURL).toPromise();
  }

  async getMovieById(id) {
    const movies = await this.fetchMovies();

    return movies.find(movie =>
      movie.id === id
    )
  }
}
