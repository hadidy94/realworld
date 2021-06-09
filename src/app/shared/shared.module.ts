import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthedDirective } from './show-authed.directive';
import { ListErrorsComponent } from './list-errors/list-errors.component';




@NgModule({
  declarations: [
    ShowAuthedDirective,
    ListErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowAuthedDirective,
    ListErrorsComponent
  ]
})
export class SharedModule { }
