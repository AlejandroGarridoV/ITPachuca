import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";

@Component({
  selector: 'app-murales',
  imports: [Header, Footer],
  templateUrl: './murales.html',
  styleUrl: './murales.css'
})
export class Murales {

}
