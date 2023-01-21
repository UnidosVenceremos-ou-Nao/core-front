import { InputmaskComponent } from './inputmask/inputmask.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormularioComponent } from './formulario/formulario.component';
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputcpfcnpjComponent } from './inputcpfcnpj/inputcpfcnpj.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FormularioComponent,
    InputtextComponent,
    InputnumberComponent,
    InputmaskComponent,
    InputcpfcnpjComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, NgxMaskDirective],
  exports: [
    NavbarComponent,
    FormularioComponent,
    InputmaskComponent,
    InputcpfcnpjComponent,
    InputtextComponent,
    NgxMaskDirective,
    InputnumberComponent,
  ],
  providers: [provideNgxMask()],
})
export class SharedModule {}
