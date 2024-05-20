import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
 //Este codigo nos permite emitir valores a nuestro listado
 @Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character: Character = {
  name: '',
  power: 0
}

emitCharacter():void{
  console.log(this.character);
  if(this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);
//El siguiente codigo nos permite limpiar nuestro form cada vez que guardemos nuevos datos en nuestro formulario
  this.character = {name:'', power: 0}
}




}
 //EventEmitter es un genérico <T>
 //Despues de emitir el onNewCharacter hacemos una validacion en el metodo emitCharacter() con el codigo "if(this.character.name.length === 0) return;"

