import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { CursoComponent } from './componets/curso/curso.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'curso', component: CursoComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursoComponent
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
