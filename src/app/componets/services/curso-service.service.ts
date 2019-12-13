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