import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";

@Component({
  selector: 'app-gestion',
  imports: [Header, Footer],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion {

}
