import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  brandSignup() {

      this.router.navigate(['/signup/brand'])
  
    }

    influencerSignup() {

      this.router.navigate(['/signup/influencer'])
  
    }
}
