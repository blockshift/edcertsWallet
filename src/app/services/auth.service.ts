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
this._cookieService.set("user", user);
  this.isUserloggedIn = true ;
}  

//token removing
setUserLoggedOut(){
  this.isUserloggedIn = false;
  this._cookieService.delete("user");
}
//checking the user login or not
getUserLoggedIn () {
  console.log(this._cookieService.get("user"));
  return (this._cookieService.get("user")!="" && this._cookieService.get("user")!=undefined);
//return this.isUserloggedIn ;
}

create (form : Form ){
  return this.http.post('http://localhost:3000/login' , form , {} )
  .map(res =>  res.json()); 
}



}