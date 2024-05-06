import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}

//Los modulos organizan los componentes de nuestro proyecto

//Inicialmente para diseñar un modulo creamos una clase "export class CounterModule". Sobre esta clase debemos agregarle el decorador @NgModule(Este decorador nos permite importar nuestros componentes  )//

//Es importante tener en cuenta que nuestros modulos van a utilizar todos los componentes que se encuentren dentro de la careta donde fue creado nuestro modulo //

//Para utilizar nuestros componentes internos en los archivos principales de nuestro proyecto, debemos exportarlos en el modulo interno del componente.

//Para que nuestros componentes internos funcionenen en el mundo externo, debemos exportar y luego importar el modulo interno "CounterModule" en el modulo "app.module" //
