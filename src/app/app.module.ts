import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './componets/asignaturas/asignaturas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asignaturas', component: AsignaturasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AsignaturasComponent
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
