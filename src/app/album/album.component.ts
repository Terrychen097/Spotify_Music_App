import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  private albumSub;
  constructor(private dataService: MusicDataService, private route: ActivatedRoute, private snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void { 
    this.albumSub= this.route.snapshot.params['id'];
    this.dataService.getAlbumByID(this.albumSub).subscribe((data) => (this.album = data));
  }

  addToFavourites(trackID) {
    this.dataService.addToFavourites(trackID).subscribe(
      (passed) => {
        this.snackBar.open('Adding to Favourites...', 'Done', {
          duration: 1500,
        });
      },
      (err) => {
        this.snackBar.open('ERROR: Unable to add song to Favourites', 'Done', {
          duration: 1500,
        });
      }
    );
  }

  ngOnDestroy() {
    this.albumSub.unsubscribe();
  }


}
