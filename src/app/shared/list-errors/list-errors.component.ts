import { Component, Input, OnInit } from '@angular/core';
import { Errors} from '../../core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
})
export class ListErrorsComponent  {

  formattedErrors: Array<string> = [];

  constructor() { }

  @Input() set errors(errorList: Errors){
    this.formattedErrors = Object.keys(errorList.errors || {})
    .map(key => `${key} ${errorList.errors[key]}`)
  }

  get errorList(){
    return this.formattedErrors
  }

}
