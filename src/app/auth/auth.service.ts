import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public estaLogado = new BehaviorSubject(false);

  constructor(private fire: AngularFireAuth) {
    this.fire.auth.onAuthStateChanged((user) => {
      if (user) {
        this.estaLogado.next(true);
      } else {
        this.estaLogado.next(false);
      }
    });
  }

  pegaUsuarioAtual() {
    return this.fire.auth.currentUser;
  }

  fazLogin(email, senha) {
    return this.fire.auth.signInWithEmailAndPassword(email, senha);
  }

  fazLogOut() {
    this.fire.auth.signOut();
  }


}
