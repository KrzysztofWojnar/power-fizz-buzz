import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  user = {
    username: '',
    password: '',
  }
  shouldShowValidation = false;

  showValidation() {
    this.shouldShowValidation = true;
    console.log('Validation should work now');
  }

  login(): void {
    console.log(this.user);
  }
}
