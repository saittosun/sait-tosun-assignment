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
  showModal: boolean;
  url: string;
  filteredStatus = '';
  isLoading = false;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.dataService.photosInSelectedAlbum.subscribe(
        (photos) => {
          this.selectedPhotos = photos;
          this.isLoading = false;
        }
      );
    }, 2000);
  }

  onShow() {
    this.showModal = true;
  }

  onHide() {
    this.showModal = false;
  }

  onPhotoHandler(id: number) {
    this.url = this.selectedPhotos.filter((photo) => photo.id === id)[0].url;
  }
}
