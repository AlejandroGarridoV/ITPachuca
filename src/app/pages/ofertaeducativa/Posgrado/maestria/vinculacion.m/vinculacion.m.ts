import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vinculacion.m',
  imports: [Header, Footer, RouterLink],
  templateUrl: './vinculacion.m.html',
  styleUrl: './vinculacion.m.css'
})
export class VinculacionM {

}
