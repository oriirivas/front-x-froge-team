import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../../componets/services/loginservice.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: string
  email: string
  constructor(
    private router: Router,
    private loginService: LoginserviceService
  ) { }

  ngOnInit() {
  }
  emailKeyup(value: string) {
    this.email = value;
  }
  passKeyup(value: string) {
    this.pass = value;
  }
  login() {
    if(this.email == null || this.pass == null){
      alert('llene todas las casillas')
    }else{
      let obs = this.loginService.login(this.email, this.pass);
      obs.subscribe(validation  => {
      if(validation) {
        this.router.navigate(['/home']);
      }else {
        alert('usuario y pass inválidos');
      }
    });
    }
  }
}
