import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nucleo-academico',
  imports: [Header, Footer, RouterLink],
  templateUrl: './nucleo-academico.html',
  styleUrl: './nucleo-academico.css'
})
export class NucleoAcademico {

}
