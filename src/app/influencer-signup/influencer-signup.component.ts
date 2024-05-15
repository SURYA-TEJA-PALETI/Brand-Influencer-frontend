import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StrongPasswordRegx } from '../login/login.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { influencersignup } from './influencersignup';


@Component({
  selector: 'app-influencer-signup',
  templateUrl: './influencer-signup.component.html',
  styleUrls: ['./influencer-signup.component.css']
})
export class InfluencerSignupComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder, private welcome:WelcomeDataService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
   }
   formSubmitted = false;
   influencersignupForm=this.formbuilder.group(
    {
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
      lastname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
      username: ['', [Validators.required,Validators.minLength(6)]],

      password: ['', [Validators.required,Validators.pattern(StrongPasswordRegx)]],
      email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      // companyname:['',[Validators.required,Validators.minLength(4)]],
      // companysite: ['', [Validators.required,Validators.pattern("^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$")]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      category: [],
      gender: ['', Validators.required]
     }
   );
  

    
   get f() { return this.influencersignupForm.controls; }
  
    onSubmitSignup() {
  
      console.log('firstname:', this.f.firstname.value);
      console.log('Password:', this.f.password.value);
      console.log('lastname:', this.f.lastname.value);
      console.log('email:', this.f.email.value);
      console.log('phonenumber:', this.f.phonenumber.value);
      console.log('gender:', this.f.gender.value);

      var firstname=this.f.firstname.value;
      var lastname=this.f.lastname.value;
      var password=this.f.password.value;
      var email=this.f.email.value;
      var phonenumber=this.f.phonenumber.value;
      var gender=this.f.gender.value;
      let  isignup :influencersignup = {firstname,lastname,password,email, phonenumber, gender};
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
