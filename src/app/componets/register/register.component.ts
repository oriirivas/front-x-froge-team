import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../../componets/services/loginservice.service';


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
    //console.log(dato)
    if(this.pass === this.repass) {
      this.loginService.register(this.email, this.pass,this.nombre).subscribe(res => {
        alert("Guradado con exito")
        this.router.navigate(['/login']);
      });
    } else {
      alert("Contraseñas diferentes");
    }
  }

  register2() {
    if(this.email != null && this.nombre != null && this.segundoNombre != null && this.apellido != null && this.segundoApellido != null && this.pass != null && this.rut != null && this.rol != null){
      if(this.pass === this.repass) {
        this.loginService.register(this.email, this.pass, this.nombre).subscribe(res => {
          console.log('respuesta', res);
          this.router.navigate(['/login']);
        });
      } else {
        alert("Contraseñas diferentes");
      }
    } else{
      alert('no ha ingresado todo los datos')
    }

  }

}