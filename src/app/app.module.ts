import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
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
