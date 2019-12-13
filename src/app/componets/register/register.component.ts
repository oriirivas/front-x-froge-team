import { Component, OnInit } from '@angular/core';

import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pass: string
  repass: string
  email: string
  nombre: string
  segundoNombre: string
  apellido: string
  segundoApellido: string
  rut: string
  rol: string

  constructor(
    private router: Router,
    private loginService: LoginserviceService) { }

  ngOnInit() {
  }

  emailKeyup(value: string) {
    this.email = value;
  }
  passKeyup(value: string) {
    this.pass = value;
  }
  repassKeyup(value: string) {
    this.repass = value;
  }
  nombreKeyup(value: string) {
    this.nombre = value;
  }
  segundoNombreKeyup(value: string) {
    this.segundoNombre = value;
  }
  apellidoKeyup(value: string) {
    this.apellido = value;
  }
  segundoApellidoKeyup(value: string) {
    this.segundoApellido = value;
  }
  rutKeyup(value: string) {
    this.rut = value;
  }
  rolKeyup(value: string) {
    this.rol = value;
  }


  register() {
    if(this.pass === this.repass) {
      this.loginService.register(this.email, this.pass).subscribe(res => {
        console.log('respuesta', res);
        this.router.navigate(['/login']);
      });
    } else {
      alert("Contraseñas diferentes");
    }
  }

  register2() {
    if(this.pass === this.repass) {
      this.loginService.register(this.email, this.pass).subscribe(res => {
        console.log('respuesta', res);
        this.router.navigate(['/login']);
      });
    } else {
      alert("Contraseñas diferentes");
    }
  }


}