import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../app.component';


@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  inputs: ['artist:Artist']
})
export class ArtistItemsComponent implements OnInit {
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
