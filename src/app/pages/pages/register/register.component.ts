//import { Form } from 'app/pages/pages/register/form';
import { AuthService } from 'app/services/auth.service';
import { Form } from './form';
import {Component, OnInit, ViewEncapsulation , Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
loading = false ;
  //@Input() form : Form ;  ;
 //@Input()  form : any = {} ;
    
   responseStatus:Object= [];
   status:boolean ;

   model: any = {};
    // @Input() name : any ;
    // @Input() email :any ;
    // @Input() password : any ;
     @Input() confirmpass : any ;

    constructor(private http :HttpClient , private router : Router , private auth : AuthService ) {
    }

    ngOnInit() {
    }


   
    

register(){
this.loading  = true ;
console.log("form value",this.model)


  this.auth.create(this.model)
    .subscribe(
        data => console.log(this.responseStatus = data),
        err => console.log(err),
        () => console.log('Request Completed')
     ); 
     this.router.navigate(["login"]);
     this.status = true;
     error => {
        //this.alertService.error(error);
        this.loading = false;
    }
    } 



        
        


}


