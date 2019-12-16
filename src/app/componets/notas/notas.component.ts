import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NotasServiceService } from '../../componets/services/notas-service.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  rut: string
  asignatura: string
  id: string
  nota1: string
  nota2: string
  nota3: string
  nota4: string
  control1: string
  control2: string
  control3: string
  control4: string


  constructor(private router  : Router,
    private notaService: NotasServiceService) { }

  ngOnInit() {
  }
  rutKeyup(value: string) {
    this.rut = value;
  }
  passKeyup(value: string) {
      this.asignatura = value;
  }

  nota1Keyup(value: string) {
    this.nota1 = value;
  }
  nota2Keyup(value: string) {
      this.nota2 = value;
  }
  nota3Keyup(value: string) {
    this.nota3 = value;
  }
  nota4Keyup(value: string) {
      this.nota4 = value;
  }
  control1Keyup(value: string) {
    this.control1 = value;}

  control2Keyup(value: string) {
    this.control2 = value;
  }
  control3Keyup(value: string) {
      this.control3 = value;
  }
  control4Keyup(value: string) {
    this.control4 = value;
}


  idPoo(){
    this.id= "2"
  }
  idFE(){
    this.id= "3"
  }
  idBE(){
    this.id= "4"
  }
  idBD(){
    this.id= "7"
  }
  idCanvas(){
    this.id= "6"
  }
  /*
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
  }*/

  promedioNotas(){
    
    let sum = (this.nota1+this.nota2+this.nota3+this.nota4)

  }

  guardarNotas(){
    console.log(this.rut,this.id)
    if(this.rut != null && this.id != null){
      let notas = this.notaService.guardarNotas(this.id,this.rut,this.nota1,this.nota2,this.nota3,this.nota4,this.control1,this.control2,this.control3,this.control4);
      if(notas){
        alert('la nota se ha guaraddo')
      }else{
      alert ('no se creo el objeto')}
    }
  }



  
}

  


  
