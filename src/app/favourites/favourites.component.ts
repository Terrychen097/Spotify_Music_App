import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: Array<any>;

  constructor(private dataService: MusicDataService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
      console.log(data);
    });
  }

  removeFromFavourites(id: any) {
    this.dataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
    this.snackBar.open('Removing from Favourites...', 'Done', {
      duration: 15000,
    });
  }

}
