import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {
 

  constructor(private http:Http) {
  }

 

publicblockchain(text){
	
console.log("This is text",text);


     let headers = new Headers({'Content-Type': 'application/json'});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             fcn: text
                }
     let body = JSON.stringify(body1);
     console.log('server logs',body1);

     return this.http.post('http://localhost:8000/stamp', body1, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

};



  }