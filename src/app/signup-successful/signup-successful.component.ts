import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-successful',
  templateUrl: './signup-successful.component.html',
  styleUrls: ['./signup-successful.component.css']
})
export class SignupSuccessfulComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Automatically redirect to the login page after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 5000);
  }

}
