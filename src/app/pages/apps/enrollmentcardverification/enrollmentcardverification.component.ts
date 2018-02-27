import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollmentcardverification',
  templateUrl: './enrollmentcardverification.component.html',
  styleUrls: ['./enrollmentcardverification.component.scss']
})
export class EnrollmentcardverificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

onSubmit(form: any):void{
    
    console.log(form);
  	 

  };

}
