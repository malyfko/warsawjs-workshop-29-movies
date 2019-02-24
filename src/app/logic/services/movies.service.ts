import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  async fetchMovies() {
    return await this.http.get('/assets/data.json').toPromise();
  }
}
