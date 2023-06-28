import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent {
  public heroes:string[] = ["Spiderman", "Ironman", "Hulk", "She-Hulk", "Thor", "Capitán América"];
  public heroeBorrado?:string ="";

  borrarHeroe():void {
    this.heroeBorrado = this.heroes.pop();
  }
}
