import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formularioLogin: FormGroup;

  constructor(private AuthS: AuthService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
    });

    this.AuthS.fazLogOut();
  }

  logar() {
    console.log(this.formularioLogin.value.email);
    // this.AuthS.fazLogin(email, senha).then(() => {
    //   console.log(this.AuthS.pegaUsuarioAtual());
    // });
  }
}
