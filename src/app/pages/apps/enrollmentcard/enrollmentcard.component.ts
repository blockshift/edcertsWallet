import { Component , Input , ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollmentcard',
  templateUrl: './enrollmentcard.component.html',
  styleUrls: ['./enrollmentcard.component.scss']
})
export class EnrollmentcardComponent  { 

@ViewChild('dataContainer') dataContainer: ElementRef;
@ViewChild('dataContainer2') dataContainer2: ElementRef;
@ViewChild('dataContainer3') dataContainer3: ElementRef;
@ViewChild('dataContainer4') dataContainer4: ElementRef;
@ViewChild('dataContainer5') dataContainer5: ElementRef;
@ViewChild('dataContainer6') dataContainer6: ElementRef;
@ViewChild('dataContainer7') dataContainer7: ElementRef;

public jsonfinal:String;
 constructor(private exampleService: AppService) {
  var x = document.cookie; 
  
var finalcookievalue = x.split("=")
console.log('Cookies nnnnnnnnnn',finalcookievalue[1]);

this.exampleService.fetchbyenrollment(finalcookievalue[1])
    .subscribe(data => {
              
                    var testRespons = data["_body"];
                    console.log("Test Response ",testRespons); 
                     var jsonstring = JSON.parse(testRespons);
                      this.jsonfinal =  jsonstring;
                    this.dataContainer.nativeElement.innerHTML = jsonstring["batch"];
                    this.dataContainer2.nativeElement.innerHTML = jsonstring["degreeholder"];
                    this.dataContainer3.nativeElement.innerHTML = jsonstring["department"];
                    this.dataContainer4.nativeElement.innerHTML = jsonstring["enrollment"];
                    this.dataContainer5.nativeElement.innerHTML = jsonstring["expiry"];
                    this.dataContainer6.nativeElement.innerHTML = jsonstring["studentfathername"];
                    this.dataContainer7.nativeElement.innerHTML = jsonstring["studentresidentialaddresss"];

                     console.log("I SEE DATA HERE: ",testRespons);
               
      }
      ); 




  }



  onSubmit(){
    
    console.log('Public Bitcoin text',this.jsonfinal);
    var finalappendstring = this.jsonfinal["batch"]+this.jsonfinal["degreeholder"]+this.jsonfinal["department"]+this.jsonfinal["enrollment"]+this.jsonfinal["expiry"]+this.jsonfinal["studentfathername"]+this.jsonfinal["studentresidentialaddresss"];
    
    console.log("Appended String",finalappendstring);
    this.exampleService.publicblockchain(finalappendstring)
  	.subscribe(data => {
  	           console.log('Service'); 
                    
  		}
  		); 
  	

  };


}
