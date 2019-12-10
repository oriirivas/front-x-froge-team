import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';

import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './componets/notas/notas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'curso', component: CursoComponent },
  { path: '**', redirectTo: 'login' }
=======
  { path: 'notas', component: NotasComponent }
>>>>>>> 6ae4aa385e2cc55aab824a395c633888110a78ca
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    CursoComponent
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
