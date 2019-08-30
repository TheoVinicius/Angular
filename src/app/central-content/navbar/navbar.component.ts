import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public mostraNav: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.estaLogado.subscribe(logado => {
      this.mostraNav = logado;
    });
  }

}
