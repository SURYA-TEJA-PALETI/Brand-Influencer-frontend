import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  campaignForm: FormGroup;
  platformOptions: string[] = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn'];

  constructor(private formBuilder: FormBuilder, private router: Router,  private el: ElementRef) { }

  ngOnInit() {
    this.campaignForm = this.formBuilder.group({
      brandAccount: [''],
      brandName: [''],
      brandSummary: [''],
      influencerWork: [''],
      influencerFee: [''],
      negotiateFee: [false],
      userPlatform: ['']
    });
  }
  showSuccessMessage=false;
  submitForm() {
    console.log('Form submitted:', this.campaignForm.getRawValue());
    // Handle form submission here
    // You can send the form data to an API or handle it as needed
    this.campaignForm.reset();
   
    this. showSuccessMessage = true;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      // Navigate to another page after 2 seconds
      this.router.navigate(['/dashboard/surya']);
    }, 2000);
  }
  goToDashboard(): void {
    this.router.navigate(['/dashboard/surya']);
  }

  }

