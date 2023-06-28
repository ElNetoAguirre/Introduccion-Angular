import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  public alias: string = "Ironman"
  public nombre: string = "Tony Stark"
  public edad: number = 45

  get capitalizedName():string {
    return this.nombre.toUpperCase()
  }

  getHeroeDescripcion():string {
    return `${this.nombre} - ${this.edad} años`;
  }

  cambiarHeroe():void {
    this.alias = "Spiderman";
    this.nombre = "Peter Parker";
  }

  cambiarEdad():void {
    this.edad = 20;
  }

  resetForm():void {
    this.alias = "Ironman";
    this.nombre = "Tony Stark";
    this.edad = 45;
  }
}
