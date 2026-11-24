import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
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
}
