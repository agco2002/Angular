import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

 // onDelete = Index value : number
 @Output()
 public onDelete: EventEmitter<string> = new EventEmitter();

//Método para la eliminación de personajes
  onDeleteCharacter(id?: string):void{
    if (!id) return;
    this.onDelete.emit(id);
  }
}

