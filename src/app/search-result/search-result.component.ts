import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  private queryParams: Subscription;
  private searchSub: Subscription;
  results: Array<any>;
  searchQuery: any;

  constructor(private route: ActivatedRoute,private dataService: MusicDataService) { }

  ngOnInit(): void
  {
    this.queryParams = this.route.queryParamMap.subscribe(params =>
    {
      this.searchQuery = this.route.snapshot.queryParams['q'];
      this.searchSub = this.dataService.searchArtists(this.searchQuery).subscribe(data => this.results = data.artists.items.filter((items: { images: string | any[]; }) =>
      {
        return items.images.length > 0;
      }));
    });
  }

  
  
  ngOnDestroy(): void
  {
    this.searchSub.unsubscribe();
    this.queryParams.unsubscribe();
  }
}
