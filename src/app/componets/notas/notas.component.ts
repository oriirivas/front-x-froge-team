import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NotasServiceService } from '../services/notas-service.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  alumnos: string
  asignatura: string

  constructor(private router  : Router,
    private notaService: NotasServiceService) { }

  ngOnInit() {
  }
  emailKeyup(value: string) {
    this.alumnos = value;
  }
  passKeyup(value: string) {
      this.asignatura = value;
  }

  getNotas(){
    let notas =this.notaService.getNota(this.alumnos,this.asignatura);
    let laNotas = null;
    if(notas != null){
        laNotas= notas;
    }else {  
        alert ('error');
    }
    return laNotas
  }
}

  


  
