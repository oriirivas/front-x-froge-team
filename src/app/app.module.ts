import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componets/register/register.component';
import { NotasComponent } from './componets/notas/notas.component';
import { TableComponent } from './componets/table/table.component';
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';
import { HomeComponent } from './componets/home/home.component';

//y todo esto tambien para la ruta
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'curso', component: CursoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'table', component: TableComponent },
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
    AsignaturasComponent

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
