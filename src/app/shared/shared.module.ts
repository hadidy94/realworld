import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthedDirective } from './show-authed.directive';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import {  MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShowAuthedDirective,
    ListErrorsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ShowAuthedDirective,
    ListErrorsComponent,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
