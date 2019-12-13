import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: string
  email: string
  constructor(
    private router  : Router,
    private loginService: LoginserviceService) { }

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
    //let obs =  this.loginService.login(this.email, this.pass);

    //let validation= this.loginService.login(this.email, this.pass).subscribe;

    //obs.subscribe(validation  => {
      //console.log('llegueee',validation)
      debugger
      if(this.loginService.login(this.email, this.pass).subscribe) {
        debugger
        this.router.navigate(['/home']);
      } else {  
        alert ('usuario y pass inválidos');
      }
   // });
  }

}
