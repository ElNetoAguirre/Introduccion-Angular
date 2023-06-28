import { Component, EventEmitter, Output } from "@angular/core";
import { Personaje } from "../../interfaces/personaje.interface";

@Component({
  selector: "dbz-agregar",
  templateUrl: "./agregar.component.html",
  styles: [
  ]
})
export class AgregarComponent {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    nombre: "",
    poder: 0
  };

  emitPersonaje():void {
    if(this.personaje.nombre.length === 0) return;

    this.onNewPersonaje.emit(this.personaje);

    this.personaje = {nombre: "", poder: 0};
  };
}
