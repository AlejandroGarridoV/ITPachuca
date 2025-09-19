import { Component, HostListener, OnInit } from '@angular/core';
import { Noticias } from "../../componentes/noticias/noticias";
import { Ofertaeducativa } from "../../componentes/ofertaeducativa/ofertaeducativa";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Noticias, Ofertaeducativa, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  menuOpen = false;
  isButtonVisible = false;
  
  // Carousel properties
  currentIndex = 0;
  isAnimating = false;
  autoplayInterval: any;
  autoplayDelay = 5000;

  slides = [
    {
      link: '#',
      img: 'carrusel/banners/Admision_Mtria_2025_B.png',
      title: 'Convocatoria EGEL',
      subtitle: 'Agosto 2025',
      external: false
    },
    {
      link: '#',
      img: 'carrusel/banners/Banner Convocatoria Agosto Diciembre 2025.jpg',
      title: 'Revista Hummatec',
      subtitle: '1° Edición',
      external: false
    },
    {
      link: '#',
      img: 'carrusel/banners/ICDTI_20251.png',
      title: 'División de Estudios',
      subtitle: 'Profesionales',
      external: false
    }
  ];

  scrollToSection(sectionId: string): void {
    this.menuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isButtonVisible = scrollPosition > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Carousel methods
  ngOnInit(): void {
    this.startAutoplay();
  }

  getSlideClass(index: number): string {
    return index === this.currentIndex ? 'carousel-slide active' : 'carousel-slide';
  }

  getDotClass(index: number): string {
    return index === this.currentIndex ? 'dot active' : 'dot';
  }

  goToSlide(index: number) {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;

    this.currentIndex = index;

    setTimeout(() => {
      this.isAnimating = false;
    }, 700);
  }

  prevSlide() {
    const newIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.goToSlide(newIndex);
    this.resetAutoplay();
  }

  nextSlide() {
    const newIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(newIndex);
    this.resetAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoplayDelay);
  }

  resetAutoplay() {
    clearInterval(this.autoplayInterval);
    this.startAutoplay();
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

}

