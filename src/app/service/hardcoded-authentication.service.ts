import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor( ) { }

  authenticate(username: string,password: string)
  {
   console.log( 'before logging in ' +this.isUserLoggedIn());
    if (username==='surya@gmail.com' && password==='Psurya@1375') {
      sessionStorage.setItem('authenticaterUser', username)
      console.log( 'after logging in ' +this.isUserLoggedIn());
return true;
  
    }
    else
    return false;
  }

  isUserLoggedIn(){
   
      let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)

}

logout(){
 
  sessionStorage.removeItem('authenticaterUser')

}
}
