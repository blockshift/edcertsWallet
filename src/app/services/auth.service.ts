import { Http , Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Form } from 'app/pages/pages/register/form';
@Injectable()
export class AuthService {

  private isUserloggedIn ;
  private username ;
  
  
  constructor(private _cookieService : CookieService , private http : Http ) {
    this.isUserloggedIn = false ;
   }
//token creating


  setUserLoggedIn (user){

this._cookieService.set("enrollmentnumber",user);
console.log(this._cookieService.get("enrollmentnumber"));
  this.isUserloggedIn = true ;
}  

//token removing
setUserLoggedOut(){
  this.isUserloggedIn = false;
  this._cookieService.delete("enrollmentnumber");
}
//checking the user login or not
getUserLoggedIn () {
  console.log(this._cookieService.get("enrollmentnumber"));
  return (this._cookieService.get("enrollmentnumber")!="" && this._cookieService.get("enrollmentnumber")!=undefined);
//return this.isUserloggedIn ;
}

create (form : Form ){
  return this.http.post('http://ec2-34-238-27-58.compute-1.amazonaws.com:3000/login' , form , {} )
  .map(res =>  res.json()); 
}



}