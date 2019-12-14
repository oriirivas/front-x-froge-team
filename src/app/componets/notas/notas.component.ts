import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NotasServiceService } from '../../componets/services/notas-service.service';

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
        alert('se agrego correctamenet '+laNotas)
    }else {  
        alert ('error');
    }
    return laNotas
  }

  guardarNotas(){
    if(this.alumnos != null && this.asignatura != null){
      let notas = this.notaService.guardarNotas(this.alumnos,this.asignatura);
      if(notas){
        alert('la nota se ha guaraddo')
      }else{
      alert ('no se creo el objeto')}
    }
  }



  
}

  


  
