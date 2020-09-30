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
  // selectedSing: number;
  showModal: boolean;
  url: string;
  isLoading = false;
  filteredStatus: string;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    // this.dataService.selectedAlbumFromData.subscribe(
    //   (sing) => (this.selectedSing = sing)
    // );
    // this.selectedPhotos = this.dataService.getAllPhotos();
    this.dataService.photosInSelectedAlbum.subscribe(
      (photos) => (this.selectedPhotos = photos)
    );
    this.dataService.setAllPhotos();
  }

  onShow() {
    this.showModal = true;
    // console.log(id);
  }

  onHide() {
    this.showModal = false;
  }

  onPhotoHandler(id: number) {
    // this.isLoading = true;
    this.url = this.selectedPhotos.filter((photo) => photo.id === id)[0].url;
    // this.isLoading = false;
    console.log(this.url);
    console.log(id);
  }
}
