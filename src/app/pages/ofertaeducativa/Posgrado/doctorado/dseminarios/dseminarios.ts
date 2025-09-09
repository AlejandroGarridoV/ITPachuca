import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dseminarios',
  imports: [Header, Footer, RouterLink],
  templateUrl: './dseminarios.html',
  styleUrl: './dseminarios.css'
})
export class Dseminarios {

}
