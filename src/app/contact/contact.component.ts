import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  iscontactusValid = true;
 
  constructor(private router: Router, private formbuilder: FormBuilder) { }
  ngOnInit() {
   
  }
 
  contactusForm=this.formbuilder.group(
   {
     username:['',[Validators.required,Validators.minLength(5)]],
    
   }
  );
   
  get f() { return this.contactusForm.controls; }
 
   onSubmit() {
 
       this.router.navigate(['dashboard', this.f.name.value])
   
   }


 
}
