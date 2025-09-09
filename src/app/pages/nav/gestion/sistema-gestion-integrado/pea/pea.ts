import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { Footer } from "../../../../../componentes/footer/footer";
import { MenuGestion } from "../../../../../componentes/menus_especiales/menu-gestion/menu-gestion";

@Component({
  selector: 'app-pea',
  imports: [Header, Footer, MenuGestion],
  templateUrl: './pea.html',
  styleUrl: './pea.css'
})
export class Pea {

}
