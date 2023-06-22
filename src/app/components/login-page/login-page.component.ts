import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  login(): void {
    // Perform login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
