import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Album } from './../shared/album.model';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  userInput: any;
  albums: Album[] = [];
  selectedAlbum: number;
  filteredStatus: string;


  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.albums = this.dataService.getAllAlbums();
  }

  onAlbumHandler(id: number) {
    this.dataService.changeSelectedAlbum(id);
  }

  // onValueChange(changes: SimpleChanges) {
  //   console.log(this.userInput);
  //   this.dataService.filteredAlbums(this.userInput);
  // }
}
