import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profesor: boolean = true

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  esProfe(){
      if(this.profesor){
        alert('puedes entrar')
        this.router.navigate(['/notas'])
      }else{
        alert ('no puedes solo profes')}
  }

}
