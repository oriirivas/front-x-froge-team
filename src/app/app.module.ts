import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './componets/notas/notas.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notas', component: NotasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotasComponent
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
