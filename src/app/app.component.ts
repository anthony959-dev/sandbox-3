import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Artist {
  name: string,
  shortname: string,
  reknown: string,
  bio: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})

export class AppComponent implements OnInit {
  title = 'My Artists';
  query: string;
  
  artists: Array<Artist>;
  currentArtist: Artist;



  showArtist(item:Artist) {
    this.query = item.name;
    this.currentArtist = item;
  }

  constructor( private http: HttpClient) {
    this.query ='';
    this.artists = Array<Artist>();
    this.currentArtist={
      name: '',
      shortname: '',
      reknown: '',
      bio: ''
    };
  }

  ngOnInit(): void {
      this.http.get<Artist[]>('./assets/data.json').subscribe(data => {
        this.artists = data;
      })
  }
}
