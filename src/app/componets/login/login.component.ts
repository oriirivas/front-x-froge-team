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
  loginService: LoginserviceService
  constructor(
    private router  : Router,
    private loginservice: LoginserviceService) { }

  ngOnInit() {
  }
  emailKeyup(value: string) {
    this.email = value;
  }
  passKeyup(value: string) {
      this.pass = value;
    }

  login(){
    console.log('soy el 1')
    console.log(this.email, this.pass)
    let obs =  this.loginService.login(this.email, this.pass);
    obs.subscribe(validation  => {
      if(validation) {
        this.router.navigate(['/home']);
      } else {  
        alert('usuario y pass inválidos');
      }
    });
  }

}
