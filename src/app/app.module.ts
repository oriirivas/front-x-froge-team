import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';
import { RegisterComponent } from './componets/register/register.component';
import { TableComponent } from './componets/table/table.component';
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';
import { HomeComponent } from './componets/home/home.component';
import { BarraComponent } from './componets/barra/barra.component';
import { AjustesComponent } from './componets/ajustes/ajustes.component';
import { NotasComponent } from './componets/notas/notas.component';


//y todo esto tambien para la ruta
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'curso', component: CursoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'table', component: TableComponent },
  { path: 'ajustes', component: AjustesComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    RegisterComponent,
    CursoComponent,
    NotasComponent,
    HomeComponent,
    AsignaturasComponent,
    BarraComponent,
    
    AjustesComponent
  ],


imports: [
  BrowserModule,
  HttpClientModule,
  //NgModule,
  RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' })
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
