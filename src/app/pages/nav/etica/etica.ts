import { Component } from '@angular/core';
import { Footer } from "../../../componentes/footer/footer";
import { Header } from "../../../componentes/header/header";

@Component({
  selector: 'app-etica',
  imports: [Footer, Header],
  templateUrl: './etica.html',
  styleUrl: './etica.css'
})
export class Etica {

}
