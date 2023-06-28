import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent {
  @Input()
  public personajes: Personaje[] = [{
    nombre: "Trunks",
    poder: 10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id?:string):void {
    if(!id) return;
    this.onDelete.emit(id);
  };
}
