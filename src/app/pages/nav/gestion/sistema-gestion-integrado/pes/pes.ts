import { Component } from '@angular/core';
import { Header } from "../../../../../componentes/header/header";
import { MenuGestion } from "../../../../../componentes/menus_especiales/menu-gestion/menu-gestion";
import { Footer } from "../../../../../componentes/footer/footer";

@Component({
  selector: 'app-pes',
  imports: [Header, MenuGestion, Footer],
  templateUrl: './pes.html',
  styleUrl: './pes.css'
})
export class Pes {

}
