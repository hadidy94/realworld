import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileArticlesComponent }  from './profile-articles.component';





@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFavoritesComponent,
    ProfileArticlesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [ProfileResolver]
})
export class ProfileModule { }
