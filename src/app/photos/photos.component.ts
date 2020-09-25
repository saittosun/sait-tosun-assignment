import { Component, OnInit } from '@angular/core';
import { Photo } from '../shared/photo.model';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  selectedPhotos: Photo[] = [];
  selectedSing: number;
  
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.selectedAlbumFromData.subscribe(
      (sing) => (this.selectedSing = sing)
    );
    // this.selectedPhotos = this.dataService.getAllPhotos();
    this.dataService.photosInSelectedAlbum.subscribe(
      (photos) => (this.selectedPhotos = photos)
    );
  }

  onPhotoHandler(id: number) {
    console.log(id);
  }
}
