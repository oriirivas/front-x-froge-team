import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoServiceService } from '../services/curso-service.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nombreCurso: string
  
  constructor(private router  : Router,
    private cursoService: CursoServiceService) { }

  ngOnInit() {
  }

  cursoKeyup(value: string) {
    this.nombreCurso = value;
  }

  crearCurso(){
    let curso = this.cursoService.guardarCurso(this.nombreCurso);

    if(this.nombreCurso != null){
      alert('El curso '+curso+' esta creado')

    }else{
      alert ('no se creo el objeto')
    }
  }

}



  