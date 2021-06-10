import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors, User, UserService } from '../core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {



  settingsForm!: FormGroup;
  user: User = {} as User;
  errors: Errors = { errors: {} };
  isSubmitting = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.settingsForm = this.fb.group({
      image:'',
      username: '',
      bio: '',
      email: '',
      password: '',
    });
  }



  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.settingsForm.patchValue(this.user);
  }
  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
  submitForm(){
    this.isSubmitting = true;
    this.user = this.settingsForm.value;
    this.userService.update(this.user).subscribe(
      user => {
        console.log(user)
        this.router.navigateByUrl('/profile/' + user.username)
      },
      err => {
        this.errors = err,
        this.isSubmitting = false
      }
    )
  }
}
