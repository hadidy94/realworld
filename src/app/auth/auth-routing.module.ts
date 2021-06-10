import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';


const routes: Routes =[

  {
    path:'login',
    component: AuthComponent,
    canActivate:[NoAuthGuard]
  },
  {
    path:'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
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
export class AuthRoutingModule { }
