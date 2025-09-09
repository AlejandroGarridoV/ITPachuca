import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seminarios.m',
  imports: [Header, Footer, RouterLink],
  templateUrl: './seminarios.m.html',
  styleUrl: './seminarios.m.css'
})
export class SeminariosM {

}
