import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nucleo-academico.m',
  imports: [Header, Footer, RouterLink],
  templateUrl: './nucleo-academico.m.html',
  styleUrl: './nucleo-academico.m.css'
})
export class NucleoAcademicoM {

}
