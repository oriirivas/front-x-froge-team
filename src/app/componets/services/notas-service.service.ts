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
   * metdo que trae las notas las notas
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

  public guardarNotas(rut: string,asignatura: string, nota1: string, nota2: string, nota3: string, nota4: string, Control1: string, control2: string, control3: string,control4: string) {
    let body = {
        "control1Dto": Control1,
        "control2Dto": control2,
        "control3Dto": control3,
        "control4Dto": control4,
        "idAsignaturaDto": asignatura,
        
        "nota1Dto": nota1,
        "nota2Dto": nota2,
        "nota3Dto": nota3,
        "nota4Dto": nota4,
        "promedioControlesDto": 12,
        "promedioNotasDto": 12,
        "rutDto": rut
    }
    return this.http.post('http://localhost:8090/api/v1/notas', body, this.headersOptions );
    
  }



}
