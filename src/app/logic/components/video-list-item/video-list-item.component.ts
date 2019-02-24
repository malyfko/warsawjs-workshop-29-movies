import {Component, Input, OnInit} from '@angular/core';
import { Movie } from "../../interfaces/Movie.interface";

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor() { }

  ngOnInit() {
    console.log(this.movie.id);
  }

}
