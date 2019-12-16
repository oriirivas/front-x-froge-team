import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoServiceService } from '../../componets/services/curso-service.service';

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
    if(this.nombreCurso != null){
      let obs = this.cursoService.crearCurso(this.nombreCurso);
      obs.subscribe(validation  => {
      if(validation) {
        alert('El curso '+this.nombreCurso+' esta creado')
      }else {
        alert ('no se creo el objeto')
      }
    });
  }
}
}



  