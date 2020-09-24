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
  private selectedAlbumSource = new BehaviorSubject<number>(1);
  selectedAlbumFromData = this.selectedAlbumSource.asObservable();

  constructor(private http: HttpClient) {}

  setAllAlbums() {
    this.http.get<any>(this.url + 'albums').subscribe((data) => {
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

  getAllPhotos(): Photo[] {
    return this.allPhotos;
  }
}
