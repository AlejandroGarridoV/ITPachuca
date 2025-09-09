import { Component, HostListener } from '@angular/core';
import { Header } from "../../componentes/header/header";
import { Footer } from "../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directorio',
  imports: [Header, Footer, RouterLink],
  templateUrl: './directorio.html',
  styleUrl: './directorio.css'
})

export class Directorio {
  isButtonVisible = false;
  currentSection = '';

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isButtonVisible = scrollPosition > 300;
    
    // Detectar la sección actual
    const sections = ['Dirección', 'Subdirección Académica', 
                     'Subdirección de Planeación y Vinculación', 
                     'Subdirección de Servicios Administrativos'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Ajuste para el header fijo
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      this.currentSection = sectionId;
    }
  }
}