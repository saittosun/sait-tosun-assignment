import { Component, OnInit } from '@angular/core';
import { Album } from './../shared/album.model';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  albums: Album[] = [];
  selectedAlbum: number;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.selectedAlbumFromData.subscribe(
      (album) => (this.selectedAlbum = album)
    );
    this.albums = this.dataService.getAllAlbums();
  }
}
