import { AuthService } from './../../../services/auth.service';
import { Component, Input , ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

    @Input() username : any ;
    @Input() pass : any ;
    @Input() form : any   ;

    selectedValue: string = '1';

    languages = [
        {value: '1', viewValue: 'English (United States)'},
        {value: '2', viewValue: 'Spanish'}
    ];

    constructor(private router : Router , private auth : AuthService , private http : HttpClient ) {
    }

    onSubmit(form : any) : void {
        console.log("username ", form.username );
      
      console.log("Password" ,form.pass);
      console.log (form);
      
      
       var name = form.username;
      var password = form.pass;

      console.log("hello" , name );
      console.log("helo" , password );
      


    };



      
   login (){

    console.log("naam hai",this.username);
    console.log();
    this.http.get('http://ec2-34-238-27-58.compute-1.amazonaws.com:3000/login/?name=' + this.username)
  
    .subscribe(
      
      (data : any[] ) => {
        
console.log("password ye hai",this.pass);
       if(this.pass==data[0].password){
       console.log("successfully login");
       
       this.auth.setUserLoggedIn(data[0].name);
   this.router.navigate(['dashboard']); 
  }
       else {
              console.log('login fail');
       }

      }
    )


  }



}
