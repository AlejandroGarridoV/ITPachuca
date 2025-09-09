import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-maestria',
  templateUrl: './menu-maestria.html',
  styleUrls: ['./menu-maestria.css']
})
export class MenuMaestria {
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