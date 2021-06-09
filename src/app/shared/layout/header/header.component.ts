import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  currentUser!: User

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      (data: User) => {
        this.currentUser = data;
      }
    )
  }


}
