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

fetchbyenrollment(enrollmentid){
    
console.log("server logs",enrollmentid);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk2NjI0NDcsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZ2EiLCJpYXQiOjE1MTk2MjY0NDd9.meztt2gu9atjURj3KF55PwehofXKaKohI1DkJc2fPHk'});
       let options = new RequestOptions({ headers: headers });
        

     return this.http.get('http://ec2-35-171-228-220.compute-1.amazonaws.com:4000/channels/firstchannel/chaincodes/firstchaincode/?peer=peer1st-orga.orga&fcn=readDegree&args=%5B%22'+enrollmentid+'%22%5D', options )

    .map((res: Response) => res)
    .catch(e => {
            if (e.status === 401) {
                console.log("It works");
                return Observable.throw('Unauthorized');
            }
             console.log("It works");
            // do any other checking for statuses here
        });


};


getdata(){
  
return('Obaid is here');

}



  }