import { CadastroComponent } from './central-content/cadastro/cadastro.component';
import { LoginComponent } from './central-content/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '', component: InicialComponent, canActivate: [AuthGuard]}, Página principal
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
