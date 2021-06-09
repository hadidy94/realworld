import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Errors, UserService } from '../core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  authType: string = '';
  title: string = '';
  errors: Errors = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userServices: UserService,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'email': ['',Validators.required],
      'password': ['',Validators.required]
    })
  }

  ngOnInit(): void {

    this.route.url.subscribe(data =>{
      this.authType = data[data.length -1].path;
      this.title = (this.authType === 'login')?'sign in':'sign up';
      if(this.authType === 'register'){
        this.authForm.addControl('username', new FormControl());
      }
    });
  }


  submitForm(){
    this.isSubmitting = true;
    this.errors = {errors: {}};
    const credentials = this.authForm.value;
    this.userServices.attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err =>{
        this.errors = err;
        this.isSubmitting = false;
        console.log(err)
      }
      )
  }



}
