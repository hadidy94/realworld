import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path:'',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class SettingsRoutingModule { }
