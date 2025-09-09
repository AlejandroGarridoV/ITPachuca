import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dvinculacion',
  imports: [Header, Footer, RouterLink],
  templateUrl: './dvinculacion.html',
  styleUrl: './dvinculacion.css'
})
export class Dvinculacion {

}
