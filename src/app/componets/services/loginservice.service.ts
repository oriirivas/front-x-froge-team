import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private headersOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    }
  };

  constructor(private http: HttpClient) { }

  setToken(){}

  getToken(){}

  public login(email: string, pass: string) {
    let body = {
      "emailDto": email,
      "passwordDto": pass
    }
<<<<<<< HEAD
    let aux = this.http.post('http://localhost:8090/api/v1/login/#/home', body, this.headersOptions );
    return aux;
=======
    //let aux = this.http.post('http://localhost:8090/api/v1/login/sessions', body, this.headersOptions );
    //debugger
    
    //return aux;
    return this.http.post('http://localhost:8090/api/v1/login/sessions', body, this.headersOptions );
    
>>>>>>> b6a7a2b2daedcd287cb262cf0fae6638b08c0f1f
  }

  public register(email:string, pass:string) {
    let body = {
      "email": email,
      "password": pass
    }
    let aux = this.http.post('http://localhost:8090/api/v1/login', body, this.headersOptions );
    return aux; 
  }
  }

