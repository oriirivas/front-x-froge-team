import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';

import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asignaturas', component: AsignaturasComponent }
=======
import { NotasComponent } from './componets/notas/notas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notas', component: NotasComponent }
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    AsignaturasComponent
=======
    NotasComponent
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
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
