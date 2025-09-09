import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";

@Component({
  selector: 'app-nuevo-ingreso',
  imports: [Header, Footer],
  templateUrl: './nuevo-ingreso.html',
  styleUrl: './nuevo-ingreso.css'
})
export class NuevoIngreso {

}
