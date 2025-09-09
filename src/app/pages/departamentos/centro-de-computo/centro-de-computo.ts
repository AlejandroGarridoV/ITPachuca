import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";

@Component({
  selector: 'app-centro-de-computo',
  imports: [Header, Footer],
  templateUrl: './centro-de-computo.html',
  styleUrl: './centro-de-computo.css'
})
export class CentroDeComputo {

}
