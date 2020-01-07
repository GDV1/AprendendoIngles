import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao = 'Traduza a frase';
  public frases: Frase[] = FRASES;
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() { }

  public atualizaResposta(resposta: string): void {
    this.resposta = resposta;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {

      // Atualiza a rodada
      this.rodada++;

      // Atualiza o progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      // Atualiza a frase exibida no template
      this.atualizaRodada();
    } else {
      // Decrementar a variável tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('O Jogo acabou!');
      }
    }
  }

  public atualizaRodada(): void {
    // Atualiza a frase exibida no template
    this.rodadaFrase = this.frases[this.rodada];

    // Limpa o campo de texto
    this.resposta = '';
  }
}
