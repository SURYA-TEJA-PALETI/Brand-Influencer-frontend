import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  constructor(private router: Router, private service: WelcomeDataService,private activatedrouter: ActivatedRoute) { }
  user=''
  
  welcomemessagefromService:string

 ngOnInit() {

  this.user= this.activatedrouter.snapshot.params['name']
}

getwelcomemessagewithParameter(){
 
  this.service.executeHelloWorldBeanServicewithpath(this.user).subscribe(
 response=>this.handleSuccessfulResponse(response),
 error=>this.handleerrorResponse(error)
 
  );
}


  handleerrorResponse(error) {
    this.welcomemessagefromService=error.error.message
  }

handleSuccessfulResponse(response){
  this.welcomemessagefromService=response.message
  console.log( this.welcomemessagefromService)
}


createCampaign(){
 this.router.navigate(["/campaign"]);
}
navigateTo(route: string): void {
  this.router.navigate([route]);
}



}
