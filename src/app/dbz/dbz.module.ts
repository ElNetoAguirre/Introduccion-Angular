import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./pages/main-page.component";
import { ListaComponent } from "./components/lista/lista.component";
import { AgregarComponent } from './components/agregar/agregar.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListaComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
