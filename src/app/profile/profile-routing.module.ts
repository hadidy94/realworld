import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ProfileResolver } from './profile-resolver.service';
import { ProfileComponent } from './profile.component';
 const routes: Routes =[
   {
     path:':username',
     component: ProfileComponent,
     resolve: {
       profile: ProfileResolver
     }
   }
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
 ],
 exports:[RouterModule]
})
export class ProfileRoutingModule { }
