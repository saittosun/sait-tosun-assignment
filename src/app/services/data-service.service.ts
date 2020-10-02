import { Injectable } from '@angular/core';
import { Album } from '../shared/album.model';
import { Photo } from '../shared/photo.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  url = 'https://jsonplaceholder.typicode.com/';
  allAlbums: Album[] = [];
  allPhotos: Photo[] = [];
  // private selectedAlbumSource = new BehaviorSubject<number>(-1);
  // selectedAlbumFromData = this.selectedAlbumSource.asObservable();

  private selectedPhotoSource = new BehaviorSubject<Photo[]>([]);
  photosInSelectedAlbum = this.selectedPhotoSource.asObservable();

  // private selectedAlbumArraySource = new BehaviorSubject<Album[]>([]);
  // albumsWithSelectedInput = this.selectedAlbumArraySource.asObservable();

  constructor(private http: HttpClient) {}

  changeSelectedAlbum(id: number) {
    // this.selectedAlbumSource.next(id);
    this.selectedPhotoSource.next(
      this.allPhotos.filter((photo) => {
        return photo.albumId === id;
      })
    );
  }

  // filteredAlbums(input: string) {
  //   this.selectedAlbumArraySource.next(
  //     this.allAlbums.filter((album) => album.title.includes(input))
  //   );
  // }

  setAllAlbums() {
    this.http.get<any>(this.url + 'albums').subscribe((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.allAlbums.push(data[i]);
      }
    });
  }

  setAllPhotos() {
    this.http.get<any>(this.url + 'photos').subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.allPhotos.push(data[i]);
      }
    });
  }

  getAllAlbums(): Album[] {
    return this.allAlbums;
  }

  // getAllPhotos(): Photo[] {
  //   return this.allPhotos;
  // }
}
