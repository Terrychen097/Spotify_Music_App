import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {SearchResultComponent} from './search-result/search-result.component';
import { RegisterComponent  } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [GuardAuthService]  },
  { path: 'newReleases', component: NewReleasesComponent, canActivate: [GuardAuthService]  },
  { path: 'artist/:id', component: ArtistComponent, canActivate: [GuardAuthService]  },
  { path: 'album/:id', component: AlbumComponent, canActivate: [GuardAuthService]  },
  { path: 'search', component: SearchResultComponent, canActivate: [GuardAuthService]  },
  { path: 'favourites', component: FavouritesComponent, canActivate: [GuardAuthService]  },  
  { path: '', redirectTo: 'newReleases', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
