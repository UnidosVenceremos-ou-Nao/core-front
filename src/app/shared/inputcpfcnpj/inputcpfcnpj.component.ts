import { Component, Input } from '@angular/core';

@Component({
  selector: 'adv-inputcpfcnpj',
  templateUrl: './inputcpfcnpj.component.html',
  styleUrls: ['./inputcpfcnpj.component.scss'],
})
export class InputcpfcnpjComponent {
  @Input('nome') nome: string = '';
  @Input('valorInicial') valorInicial: any = '';
  @Input('identificador') identificador: string = '';
  @Input('desabilitar') desabilitar: any = false;
  @Input('mascara') mascara: string = '';
}
