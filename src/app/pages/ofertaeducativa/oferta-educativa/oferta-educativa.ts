import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Header } from '../../../componentes/header/header';
import { Footer } from '../../../componentes/footer/footer';

@Component({
  selector: 'app-oferta-educativa',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './oferta-educativa.html',
  styleUrls: ['./oferta-educativa.css']
})
export class OfertaEducativa implements AfterViewInit {
  menuOpen = false;
  isButtonVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonVisible = window.scrollY > 300;
  }

  ngAfterViewInit() {
    const svgElement = document.getElementById('bg-icons');
    if (!svgElement) return;
    if (!(svgElement instanceof SVGSVGElement)) return; // Asegura el tipo correcto

    const icons = ['📘', '💡', '🎓', '🧪'];
    for (let i = 0; i < 20; i++) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      const icon = icons[Math.floor(Math.random() * icons.length)];
      text.textContent = icon;
      text.setAttribute('x', `${Math.random() * 100}%`);
      text.setAttribute('y', `${Math.random() * 100 - 100}%`);
      text.style.fontSize = `${Math.random() * 2 + 2}rem`;
      text.style.animationDelay = `${Math.random() * 20}s`;
      text.style.animationDuration = `${15 + Math.random() * 10}s`;
      svgElement.appendChild(text);
    }
  }


  scrollToSection(targetId: string): void {
    this.menuOpen = false;
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
