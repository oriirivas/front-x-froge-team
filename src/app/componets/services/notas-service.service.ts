import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasServiceService {
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
  /**
   * metdo que gurdara las notas
   * @param nombre 
   * @param asignatura 
   */
  public getNota(nombre: string, asignatura: string) {
    let body = {
      "nombreDto": nombre,
      "asignaturadDto": asignatura
    }
    const url_api = 'url';
    return url_api
  }



}
