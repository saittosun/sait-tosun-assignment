import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { ShortenPipe } from './shared/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PhotosComponent,
    FilterPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
