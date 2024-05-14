import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent {

  public nombre: string = '';
  public email: string = '';
  public telefono: number = 0;
  public direccion: string | number = "";


  reset(){
    this.nombre = '';
    this.email = '';
    this.telefono = 0;
    this.direccion = '';
  }
   onSubmit() {
    console.log('Formulario enviado:', { nombre: this.nombre, email: this.email, telefono:this.telefono, direccion: this. direccion});
  }

  texto(){
    console.log('Los datos se guardaron correctamente');
  }
}













