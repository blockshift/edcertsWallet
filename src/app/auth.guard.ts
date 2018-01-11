import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService , private router :Router  ){}

  canActivate( next:ActivatedRouteSnapshot,
    state : RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{     
    if (this.auth.getUserLoggedIn()){
        return true;
    }  
    else{
      console.log("u r not authenticate");
        this.router.navigate(["/login"]);
    }
  
  }
}



