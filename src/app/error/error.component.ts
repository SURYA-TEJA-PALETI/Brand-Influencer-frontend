import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage="There is an error accessing this page. Please contact our support team on +91 1234432110"

  constructor() { }

  ngOnInit(): void {
  }

}
