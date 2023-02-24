import { Component, Input, OnInit } from '@angular/core';
import { Artist } from './../app.component';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artist:Artist']
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist:Artist = {
    name: '',
    shortname: '',
    reknown: '',
    bio: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
