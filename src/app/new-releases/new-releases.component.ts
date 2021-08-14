import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  releases!: any[];

  private newR: Subscription;
  constructor(private dataService: MusicDataService) {}

  ngOnInit(): void {
    this.newR = this.dataService.getNewReleases().subscribe(data => {  
      this.releases = data.albums.items;
    });
   
  }

  ngOnDestroy() {
    this.newR.unsubscribe();
  }
}
