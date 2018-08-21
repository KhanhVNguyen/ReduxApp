import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  
  constructor() { }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log(this.user);
  }
}
