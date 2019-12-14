import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/internal/observable';
import { LoginserviceService} from '../services/loginservice.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {
  cursos: Observable<any>;
  curso:  Observable<any>;

  constructor(private http:  HttpClient, private loginService: LoginserviceService ) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
    
  })


getCurso(){ 
  const url_api = 'http://localhost:8090/api/v1/curso';
  return this.http.get(url_api);
}

getCursoId(id: String){
  const url_api = 'http://localhost:8090/api/v1/curso/${id}';

  this.curso = this.http.get(url_api);
}

guardarCurso(curso){
  let token = this.loginService.getToken();
  const url_api = 'http://localhost:8090/api/v1/curso?access_token=${token}'
  return this.http.post(url_api, curso,{headers: this.headers})
  .pipe(map(data=> data));
}

actualizarCurso(curso){
  let token = this.loginService.getToken();
  const url_api = 'http://localhost:8090/api/v1/curso?access_token=${token}'
  return this.http.put(url_api, curso,{headers: this.headers})
  .pipe(map(data=> data));
}
borrarCurso(id: String){
  let token = this.loginService.getToken();
  const url_api = 'http://localhost:8090/api/v1/curso?access_token=${token}'
  return this.http.delete(url_api, {headers: this.headers})
  .pipe(map(data=>  data));
}

}


/**
 * 
 * amigo creo que mesclaste lo que van el servicio con lo que va en el ts del componets esto creo que seria lo que va
 * 
 * import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {
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

  public crearCurso(name: string) {
    let body = {
      "esteNombre": name (el "esteNombre" debe ser igual a que sale en la api )
    }
    return this.http.post('http://localhost:8090/api/v1/Person/vaidate', body, this.headersOptions );
    
  }
  
  } 


 * 
 */