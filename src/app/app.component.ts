import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sait-tosun-assignment';

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.setAllAlbums();
  }
}
