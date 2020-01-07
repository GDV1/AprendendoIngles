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
  public resposta: string;

  public rodada = 0;
  public rodadaFrase: Frase;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: string): void {
    this.resposta = resposta;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {

      // Atualiza a rodada
      this.rodada++;

      // Atualiza a frase exibida no template
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('Tradução errada. Tente novamente');
    }
  }
}
