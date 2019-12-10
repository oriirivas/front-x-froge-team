import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';


import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './componets/table/table.component';

//y todo esto tambien para la ruta
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent
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
