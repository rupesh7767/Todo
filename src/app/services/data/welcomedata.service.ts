import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { welcomedatatype } from 'src/app/welcome/welcome.component';

class welcomedatatype{
  constructor(public message : String){}
}

@Injectable({
  providedIn: 'root'
})

export class WelcomedataService {
  constructor(
    private http: HttpClient
  ) { }

 
  executewelcomeservice( name :String){

   
    console.log("all set 3" );
    let basicAuth = this.createBasicAuth();
    let headr = new HttpHeaders(
      {
        Authorization : 'Basic cnVwZXNoOnJ1cGVzaA=='
      }
    )

    const options = {
      headers: headr,
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
      responseType: "json"
  };
    return this.http.get<welcomedatatype>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

  createBasicAuth(){
    let username ='rupesh'
    let password = 'rupesh'
    let basicAuth = 'Basic ' + window.btoa(username+':'+password);
    console.log(basicAuth)
    let auth = 'Basic cnVwZXNoOnJ1cGVzaA=='
    return auth;
  }
}

// 123:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' from origin 'http://localhost:4200' has been blocked by CORS
//  policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// 123:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' from origin 'http://localhost:4200'
//  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.