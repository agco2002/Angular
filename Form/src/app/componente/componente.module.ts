import { NgModule } from '@angular/core';
import { ComponenteComponent } from './componente.component';
import { FormsModule } from '@angular/forms';



@NgModule({

  exports: [
    ComponenteComponent
  ],
  declarations:[
    ComponenteComponent
  ],
  imports: [
    FormsModule
  ]

})
export class ComponenteModule { }
