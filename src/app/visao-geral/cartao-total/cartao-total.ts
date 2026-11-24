import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cartao-total',
  styleUrl: './cartao-total.css',
  templateUrl: './cartao-total.html',
})
export class CartaoTotal {
  readonly ativo = input(false);
  readonly area = input.required<string>();
  readonly quantidade = input.required<number>();

  readonly selecionado = output<void>();
}
