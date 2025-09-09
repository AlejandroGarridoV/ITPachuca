import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-doctorado',
  imports: [RouterLink],
  templateUrl: './menu-doctorado.html',
  styleUrl: './menu-doctorado.css'
})
export class MenuDoctorado {
scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
