import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private hardcodedauthentication: HardcodedAuthenticationService, public router: Router){

  }

  ngOnInit(){
   
  }

  logout() {
    this.hardcodedauthentication.logout();
    this.router.navigate(['login']); // Redirect to login after logout
  }
}
