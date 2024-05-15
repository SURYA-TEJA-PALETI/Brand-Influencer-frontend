import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app.constants';
import { brandsignup } from 'src/app/influencer-signup/brandsignup';
import { influencersignup } from 'src/app/influencer-signup/influencersignup';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

export class register{
  constructor(public firstName:string, public lastName:string, 
    public email:string, public password:string, public companyName:string,
    public companyWebsite:string, public mobile:string, public brandCategory:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {


  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    // console.log("Hello. this is ")
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  
  executeHelloWorldBeanServicewithpath(name){
    // console.log("Hello. this is ")
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`)
  }
  executeSignupinfluencer(register:any){
    // console.log("Hello. this is ")
    return this.http.post<any>(`${API_URL}/register`, register)
  }
  executeSignupBrand(brandsignupdetails:brandsignup){
    // console.log("Hello. this is ")
    return this.http.post<any>(`${API_URL}/register`, brandsignupdetails)
  }
}

