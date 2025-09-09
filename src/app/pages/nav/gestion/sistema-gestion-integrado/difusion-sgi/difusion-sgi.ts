import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { MenuGestion } from "../../../../../componentes/menus_especiales/menu-gestion/menu-gestion";

@Component({
  selector: 'app-difusion-sgi',
  imports: [Header, Footer, MenuGestion],
  templateUrl: './difusion-sgi.html',
  styleUrl: './difusion-sgi.css'
})
export class DifusionSgi {

}
