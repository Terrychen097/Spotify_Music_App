/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: __Terry Chen_____ Student ID: __115309171_ Date: _07/16/2021___
*
********************************************************************************/
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Event, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web422-a4';
  searchString: string;
  token: any;

  constructor(private router: Router,private auth: AuthService){}
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
        console.log("readtoken"+JSON.stringify(this.token));
      }
    });
  }

  handleSearch(){
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
