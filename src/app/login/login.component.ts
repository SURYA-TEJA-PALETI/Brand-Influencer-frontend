import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage='Invalid Credentials. Please enter valid credentials!'
  isLoginValid = true;
  constructor(private basicAuthenticationService: BasicAuthenticationService,private router: Router, private formbuilder: FormBuilder, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  ngOnInit() {
   
  }
 
  loginForm=this.formbuilder.group(
   {
     username:['',[Validators.required,Validators.minLength(3)]],
     password: ['', [Validators.required,Validators.pattern(StrongPasswordRegx)]],
   }
  );
   
  get f() { return this.loginForm.controls; }
 
   onSubmit() {
 
     console.log('Username:', this.f.username.value);
     console.log('Password:', this.f.password.value);
     if (this.hardcodedAuthenticationService.authenticate(this.f.username.value, this.f.password.value)) {
       this.isLoginValid=true
       this.router.navigate(['dashboard', this.f.username.value])
   
     }
     else
     this.isLoginValid=false
   }


   handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.f.username.value, this.f.password.value)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['dashboard',  this.f.username.value])
            this.isLoginValid=true   
          },
          error => {
            console.log(error)
            this.isLoginValid=false
          }
        )
  }
}
