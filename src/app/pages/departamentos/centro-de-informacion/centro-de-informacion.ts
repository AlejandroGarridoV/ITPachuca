import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";

@Component({
  selector: 'app-centro-de-informacion',
  imports: [Header, Footer],
  templateUrl: './centro-de-informacion.html',
  styleUrl: './centro-de-informacion.css'
})
export class CentroDeInformacion {

}
