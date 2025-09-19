import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historia.html',
  styleUrls: ['./historia.css']
})
export class Historia implements AfterViewInit {
  ngAfterViewInit() {
    // Animación de elementos al hacer scroll
    const animatedElements = document.querySelectorAll('.animate-up');
    
    function checkScroll() {
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Comprobar elementos visibles al cargar la página
  }
}