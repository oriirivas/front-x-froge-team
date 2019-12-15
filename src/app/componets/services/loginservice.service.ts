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
    return this.http.post('http://localhost:8080/api/v1/logins/sessions', body, this.headersOptions );
    
  }
  

  public register(email:string, pass:string, name:string) {
    let body = {
      "emailDto": email,
      "passwordDto": pass
    }
    let aux = this.http.post('http://localhost:8080/api/v1/logins', body, this.headersOptions );
    return aux; 
  }

  /**/

  public register2(email:string, pass:string, nombre: string, segundoNombre: string, apellido: string, segundoApellido: string, rut: string, rol: string) {
    let body = {
      "emailDto": email,
      "passwordDto": pass,
      "nombreDto": nombre,
      "segundoNombreDto": segundoNombre,
      "apellidoDto": apellido,
      "segundoApellidoDto": segundoApellido,
      "rutDto": rut,
      "rolDto": rol
    }
    let aux = this.http.post('http://localhost:8090/api/v1/login', body, this.headersOptions );
    return aux; 
  } /**/
  }

