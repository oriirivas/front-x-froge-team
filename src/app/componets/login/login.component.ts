import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: string
  email: string
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

    loginUser() {
      if(this.email == "joan" && this.pass =="123123"){
        alert("Logeado")
  
      } else {
        alert("usuario inválido")
      }
    };
    
  }


