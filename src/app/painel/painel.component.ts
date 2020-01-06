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
    console.log(this.rodadaFrase);
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: string): void {
    this.resposta = resposta;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    console.log('Verificar resposta: ', this.resposta);
  }

}
