import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { VisaoGeral } from './visao-geral/visao-geral';
import { Cabecalho } from './layout/cabecalho/cabecalho';

@Component({
  imports: [RouterOutlet, Cabecalho, VisaoGeral],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Sistema de Pedidos');
}
