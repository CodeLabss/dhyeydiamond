import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { LandingpageComponent } from '../landingpage/landingpage.component';

// import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // standalone:true,
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  public isAuthenticationFail!: boolean;
  constructor(private router: Router) {
    this.isAuthenticationFail = false;
  }
  loginForm = new FormGroup({
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  CheckUser() {
    let uname = this.loginForm.value.UserName;
    let upass = this.loginForm.value.Password;
    console.log(uname, upass);
    if (uname == "admin" && upass == "admin")
      this.router.navigate(['landingpage']);
    else
      this.isAuthenticationFail = true;
  }

 }


