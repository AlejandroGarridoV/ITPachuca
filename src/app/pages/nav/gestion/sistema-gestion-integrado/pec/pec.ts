import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { MenuGestion } from "../../../../../componentes/menus_especiales/menu-gestion/menu-gestion";
import { Footer } from "../../../../../componentes/footer/footer";

@Component({
  selector: 'app-pec',
  imports: [Header, MenuGestion, Footer],
  templateUrl: './pec.html',
  styleUrl: './pec.css'
})
export class Pec {

}
