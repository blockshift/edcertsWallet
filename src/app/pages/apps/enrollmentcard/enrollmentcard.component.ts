import { Component , Input , ViewChild,ElementRef,TemplateRef } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-enrollmentcard',
  templateUrl: './enrollmentcard.component.html',
  styleUrls: ['./enrollmentcard.component.scss']
})
export class EnrollmentcardComponent  { 

 constructor(private exampleService: AppService) { }



  onSubmit(){
    

    this.exampleService.publicblockchain('This is text')
  	.subscribe(data => {
  	           console.log('Service'); 
                    
  		}
  		); 
  	

  };


}
