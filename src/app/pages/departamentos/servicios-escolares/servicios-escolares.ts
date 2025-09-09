import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios-escolares',
  imports: [Header, Footer, RouterLink],
  templateUrl: './servicios-escolares.html',
  styleUrl: './servicios-escolares.css'
})
export class ServiciosEscolares {

}
