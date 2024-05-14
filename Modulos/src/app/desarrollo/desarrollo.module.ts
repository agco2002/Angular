import { NgModule } from '@angular/core';
import { CodigoComponent } from './codigo/codigo.component';
import { LogicaComponent } from './logica/logica.component';


@NgModule({

  exports: [
    CodigoComponent,
    LogicaComponent,
  ],
  declarations: [
    CodigoComponent,
    LogicaComponent,
  ],

})
export class DesarrolloModule { }

