import { NgModule } from '@angular/core';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';



@NgModule({

  exports: [
    EstudiantesComponent,
    ProfesoresComponent,
  ],
  declarations: [
    EstudiantesComponent,
    ProfesoresComponent,
  ],

})
export class DatosModule { }
