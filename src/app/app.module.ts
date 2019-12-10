import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';


import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TableComponent } from './componets/table/table.component';
=======
<<<<<<< HEAD
import { HomeComponent } from './componets/home/home.component';
>>>>>>> 6e28de20239f80884acf4c9923bb9cdd8f672975

//y todo esto tambien para la ruta
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'table', component: TableComponent }
=======
  {path: 'home', component: HomeComponent }
=======
<<<<<<< HEAD
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asignaturas', component: AsignaturasComponent }
=======
import { NotasComponent } from './componets/notas/notas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'curso', component: CursoComponent },
  { path: '**', redirectTo: 'login' }
=======
  { path: 'notas', component: NotasComponent }
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
<<<<<<< HEAD
=======
>>>>>>> 6f96d60ea798302857b1970536bb79ef6d441ab3
>>>>>>> 1da95bae033b695931d5438f089a84358fd8cdf9
>>>>>>> 6e28de20239f80884acf4c9923bb9cdd8f672975
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    TableComponent
=======
<<<<<<< HEAD
<<<<<<< HEAD
    CursoComponent
=======
    NotasComponent
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
=======
    HomeComponent
=======
<<<<<<< HEAD
    AsignaturasComponent
=======
    NotasComponent
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
>>>>>>> 6f96d60ea798302857b1970536bb79ef6d441ab3
>>>>>>> 1da95bae033b695931d5438f089a84358fd8cdf9
>>>>>>> 6e28de20239f80884acf4c9923bb9cdd8f672975
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
