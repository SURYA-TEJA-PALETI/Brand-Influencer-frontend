import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StrongPasswordRegx } from '../login/login.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { brandsignup } from '../influencer-signup/brandsignup';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-brand-signup',
  templateUrl: './brand-signup.component.html',
  styleUrls: ['./brand-signup.component.css']
})
export class BrandSignupComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder, public hardcodedauthenticationService: HardcodedAuthenticationService, private welcome:WelcomeDataService) { }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  formSubmitted = false;
  brandsignupForm=this.formbuilder.group(
   {
     firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
     lastname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
     username: ['', [Validators.required,Validators.minLength(6)]],

     password: ['', [Validators.required,Validators.pattern(StrongPasswordRegx)]],
     email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     companyname:['',[Validators.required,Validators.minLength(4)]],
     companysite: ['', [Validators.required,Validators.pattern("^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$")]],
     phonenumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
     category: ['', Validators.required]
    }
  );
   
  get f() { return this.brandsignupForm.controls; }
 
   onSubmitSignup() {
 
     console.log('firstname:', this.f.firstname.value);
     console.log('lastname:', this.f.lastname.value);
     console.log('username:', this.f.username.value);
     console.log('password:', this.f.password.value);
     console.log('email:', this.f.email.value);
     console.log('companyname:', this.f.companyname.value);
     console.log('companysite:', this.f.companysite.value);
     console.log('category:', this.f.category.value);
     console.log('phonenumber:', this.f.phonenumber.value);
     var firstName=this.f.firstname.value;
     var lastName=this.f.lastname.value;
     var username=this.f.username.value;
     var password=this.f.password.value;
     var email=this.f.email.value;
     var mobile=this.f.phonenumber.value;
     var brandCategory=this.f.category.value;
     var companyName=this.f.companyname.value;
     var companyWebsite=this.f.companysite.value;
     var role="USER_BRAND_MANAGER";
     var profileVerified=1;


     let  isignup :brandsignup = {firstName,lastName,username, password,email, mobile, brandCategory, companyName,companyWebsite, role,profileVerified};
     this.welcome.executeSignupinfluencer(isignup)
     .subscribe(
       data => {
         console.log(data)
         
       },
       error => {
         console.log(error)
       
       }
     )

     this.router.navigate(['/signup-success']);
 }


   
 }

