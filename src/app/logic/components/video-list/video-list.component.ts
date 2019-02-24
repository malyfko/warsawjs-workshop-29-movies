import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../interfaces/Movie.interface";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.movies);
  }

}
