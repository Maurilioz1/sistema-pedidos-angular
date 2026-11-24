import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { CartaoTotal } from './cartao-total/cartao-total';

@Component({
  imports: [NgStyle, CartaoTotal],
  selector: 'app-visao-geral',
  styleUrl: './visao-geral.css',
  templateUrl: './visao-geral.html',
})
export class VisaoGeral {
  protected readonly totais = [
    { area: 'Clientes', quantidade: 3 },
    { area: 'Produtos', quantidade: 5 },
    { area: 'Pedidos', quantidade: 0 },
  ];

  protected readonly areaSelecionada = signal<string | null>(null);
}
