import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';
<<<<<<< HEAD
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './componets/notas/notas.component';
=======
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componets/register/register.component';
import { NotasComponent } from './componets/notas/notas.component';
import { TableComponent } from './componets/table/table.component';
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';
>>>>>>> 9cf8f70711d8253c25782a899309cde306e81f60
import { HomeComponent } from './componets/home/home.component';
import { NavDirective } from './componets/nav.directive';
import { BarraComponent } from './componets/barra/barra.component';

//y todo esto tambien para la ruta
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'curso', component: CursoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'home', component: HomeComponent },
=======
  {path: 'home', component: HomeComponent },
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'curso', component: CursoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'table', component: TableComponent },
  { path: 'register', component: RegisterComponent },
>>>>>>> 9cf8f70711d8253c25782a899309cde306e81f60
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    CursoComponent,
    NotasComponent,
    HomeComponent,
    AsignaturasComponent,
    NotasComponent,
=======
    TableComponent,
    RegisterComponent,
    CursoComponent,
    NotasComponent,
    HomeComponent,
    AsignaturasComponent,
    NavDirective,
    BarraComponent,
   

>>>>>>> 9cf8f70711d8253c25782a899309cde306e81f60
  ],

  imports: [
    //de aquii para la ruta
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    //aqui
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
