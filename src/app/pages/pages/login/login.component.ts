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

    @Input() email : any ;
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

// login (){

//       if (this.username == "juni" && this.pass == 123 ){
//           this.router.navigate(['dashboard']);
//           this.auth.setUserLoggedIn();
//           console.log("success");
//       }
//        else
//            console.log('login fail');
      
      
//       }


      
   login (){

    console.log("naam hai",this.email);
    console.log();
    this.http.get('http://localhost:3000/login/?email=' + this.email)
  
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
