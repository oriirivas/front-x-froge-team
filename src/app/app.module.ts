import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './componets/notas/notas.component';
import { HomeComponent } from './componets/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursoComponent,
    NotasComponent,
    HomeComponent,
    AsignaturasComponent,
    NotasComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
