import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  firstname: string;
  lastname:string;
  email: string;
  phoneNumber?: string;
  brandDetails?: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  user: User = {
    firstname: 'John Doe',
    lastname: 'paleti',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    brandDetails: 'we are located in 123 Main St, Anytown, USA'
  };
  showSuccessMessage = false;

  saveProfile() {
    // Handle saving profile data here
    console.log('Profile saved:', this.user);
    
    this. showSuccessMessage = true;
    setTimeout(() => {
      // Navigate to another page after 2 seconds
      this.router.navigate(['/dashboard/surya']);
    }, 2000);
  }
  goToDashboard(): void {
    this.router.navigate(['/dashboard/surya']);
  }
  }

