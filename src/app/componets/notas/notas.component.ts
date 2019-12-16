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
  asignatura: number
  id: number
  nota1: number
  nota2: number
  nota3: number
  nota4: number
  control1: number
  control2: number
  control3: number
  control4: number
  promedioNota: number=3
  promedioControl: number=2


  constructor(private router  : Router,
    private notaService: NotasServiceService) { }

  ngOnInit() {
  }
  
  rutKeyup(value: string) {
    this.rut = value;
  }
  passKeyup(value: number) {
      this.asignatura = value;
  }

  nota1Keyup(value: number) {
    this.nota1 = value;
  }
  nota2Keyup(value: number) {
      this.nota2 = value;
  }
  nota3Keyup(value: number) {
    this.nota3 = value;
  }
  nota4Keyup(value: number) {
      this.nota4 = value;
  }
  control1Keyup(value: number) {
    this.control1 = value;}

  control2Keyup(value: number) {
    this.control2 = value;
  }
  control3Keyup(value: number) {
      this.control3 = value;
  }
  control4Keyup(value: number) {
    this.control4 = value;
}


  idPoo(){
    this.id=2
  }
  idFE(){
    this.id=3
  }
  idBE(){
    this.id=4
  }
  idBD(){
    this.id=5
  }
  idCanvas(){
    this.id=6
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
    
    this.promedioNota=2

  }

  promedioControles(){

    this.promedioControl=3

  }

  guardarNotas(){
    console.log(this.promedioControl,this.promedioNota)
    if(this.rut != null && this.id != null){
      let obs = this.notaService.guardarNotas(this.rut,this.id,this.nota1,this.nota2,this.nota3,this.nota4,this.control1,this.control2,this.control3,this.control4,this.promedioNota,this.promedioControl);
      obs.subscribe(validation  => {
      if(validation != null){
        alert('la nota se ha guaraddo')
      }else{
      alert ('no se creo la notas')
      }
    });
    }  
  }
}




  
