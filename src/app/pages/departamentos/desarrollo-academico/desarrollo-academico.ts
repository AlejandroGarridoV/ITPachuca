import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desarrollo-academico',
  imports: [Header, Footer, RouterLink],
  templateUrl: './desarrollo-academico.html',
  styleUrl: './desarrollo-academico.css'
})
export class DesarrolloAcademico {

}
