import { Component, AfterViewInit } from '@angular/core';
import { Header } from '../../../componentes/header/header';
import { Footer } from '../../../componentes/footer/footer';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.css'
})
export class Publicaciones implements AfterViewInit {

  ngAfterViewInit() {
  const buttons = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.publicacion-card') as NodeListOf<HTMLElement>;

  // Filtro con animaciones
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const show = category === 'all' || cardCategory === category;

        // Ocultar con animación
        if (!show) {
          card.classList.remove('anim-show', 'show');
          card.classList.add('anim-hide');
          setTimeout(() => {
            card.classList.add('hide');
            card.classList.remove('anim-hide');
          }, 100); // coincide con duración de fadeOutDown
        }

        // Mostrar con animación
        else {
          card.classList.remove('hide');
          void card.offsetWidth; // reinicia animación
          card.classList.add('show', 'anim-show');
          setTimeout(() => {
            card.classList.remove('anim-show');
          }, 500); // coincide con duración de fadeInUp
        }
      });
    });
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
}

}
