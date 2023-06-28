import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styles: [
  ]
})
export class CounterComponent {
  public title: string = "Introducción a Angular";
  public counter: number = 10

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
