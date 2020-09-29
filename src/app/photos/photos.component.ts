import { Component, OnInit } from '@angular/core';
import { Photo } from '../shared/photo.model';
import { DataServiceService } from './../services/data-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

interface DialogData {
  imagePath: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  selectedPhotos: Photo[] = [];
  selectedSing: number;
  // imagePath: string;
  showModal: boolean;
  url: string;

  constructor(
    private dataService: DataServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.selectedAlbumFromData.subscribe(
      (sing) => (this.selectedSing = sing)
    );
    // this.selectedPhotos = this.dataService.getAllPhotos();
    this.dataService.photosInSelectedAlbum.subscribe(
      (photos) => (this.selectedPhotos = photos)
    );
  }

  onShow(id: number) {
    this.showModal = true;
    // console.log(id);
  }

  onHide() {
    this.showModal = false;
  }

  onPhotoHandler(id: number) {
    this.url = this.selectedPhotos.filter((photo) => photo.id === id)[0].url;
    console.log(this.url);
    console.log(id);
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '300px',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.imagePath = result;
  //   });
  // }
}
