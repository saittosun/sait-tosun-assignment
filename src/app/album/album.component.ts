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
  isLoading = false;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    // this.dataService.selectedAlbumFromData.subscribe(
    //   (album) => (this.selectedAlbum = album)
    // );
    // this.dataService.albumsWithSelectedInput.subscribe(
    //   (albums) => (this.albums = albums)
    // );
    this.dataService.setAllAlbums();
    this.albums = this.dataService.getAllAlbums();
    // this.userInput = ' ';
  }

  onAlbumHandler(id: number) {
    // this.isLoading = true;
    console.log(id);
    this.dataService.changeSelectedAlbum(id);
    // this.isLoading = false;
  }

  // onValueChange(changes: SimpleChanges) {
  //   console.log(this.userInput);
  //   this.dataService.filteredAlbums(this.userInput);
  // }
}
