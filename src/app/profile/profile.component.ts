import { Profile } from './../core/models/profile.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }


  profile !: Profile;
  ngOnInit(): void {
    this.route.data.subscribe(data => console.log(data.profile))
  }

}
