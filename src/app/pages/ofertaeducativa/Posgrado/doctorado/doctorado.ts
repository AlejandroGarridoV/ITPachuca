import { Component, HostListener} from '@angular/core';
import { MenuDoctorado } from "../../../../componentes/menus_especiales/menu-doctorado/menu-doctorado";

@Component({
  selector: 'app-doctorado',
  imports: [MenuDoctorado],
  templateUrl: './doctorado.html',
  styleUrl: './doctorado.css'
})
export class Doctorado {
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
