import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './central-content/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginComponent } from './central-content/login/login.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCU162xBGghRaszmRllu4c9JdtzakJJyzM',
  authDomain: 'paffi-tcc.firebaseapp.com',
  databaseURL: 'https://paffi-tcc.firebaseio.com',
  projectId: 'paffi-tcc',
  storageBucket: 'paffi-tcc.appspot.com',
  messagingSenderId: '90869128650',
  appId: '1:90869128650:web:9fc2c7c03513c6de'
};

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
