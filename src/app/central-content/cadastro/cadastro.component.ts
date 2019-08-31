import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formularioCadastro: FormGroup;
  public opcoes: any[] = [];
  constructor(
    private AuthS: AuthService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService) { }

  ngOnInit() {

    this.opcoes = [
      { label: 'Deseja Vender?', value: null },
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ];

    this.formularioCadastro = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      confEmail: [null, Validators.required],
      senha: [null, Validators.required],
      confSenha: [null, Validators.required],
      vender: [null, Validators.required],
    });
  }
  cadastrar() {
    if (!this.formularioCadastro.valid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Dados inválidos',
        detail: 'Verifique os dados e tente novamente'
      });
    } else {
      if ((this.formularioCadastro.value.email === this.formularioCadastro.value.confEmail)
        && (this.formularioCadastro.value.senha === this.formularioCadastro.value.confSenha)) {
      } else if ((this.formularioCadastro.value.email !== this.formularioCadastro.value.confEmail)) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Confirmação de E-mail incorreta',
          detail: 'Verifique os dados e tente novamente'
        });
      } else if (this.formularioCadastro.value.senha !== this.formularioCadastro.value.confSenha) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Confirmação de Senha incorreta',
          detail: 'Verifique os dados e tente novamente'
        });
      }
    }
  }
}
