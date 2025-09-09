import { Component, HostListener } from '@angular/core';
import { Header } from "../../../../componentes/header/header";
import { Footer } from "../../../../componentes/footer/footer";
import { MenuMaestria } from "../../../../componentes/menus_especiales/menu-maestria/menu-maestria";

@Component({
  selector: 'app-maestria',
  imports: [Header, Footer, MenuMaestria],
  templateUrl: './maestria.html',
  styleUrl: './maestria.css'
})
export class Maestria {
  showScrollButton = false;
  private scrollThreshold = 300; // Aparece después de 300px de scroll

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = (window.pageYOffset > this.scrollThreshold);
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}