import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filosofia',
  imports: [CommonModule ],
  templateUrl: './filosofia.html',
  styleUrls: ['./filosofia.css']
})
export class Filosofia {
  valoresInstitucionales = [
    {
      nombre: 'Humanismo',
      descripcion: 'Valoramos al ser humano y su condición; respetamos su género, ideología y cultura.'
    },
    {
      nombre: 'Responsabilidad',
      descripcion: 'Cumplimos nuestros compromisos, asumiendo y respondiendo a las consecuencias de las propias decisiones; impactando positivamente en el bienestar social, medio ambiente y ámbito profesional.'
    },
    {
      nombre: 'Liderazgo',
      descripcion: 'Generamos acciones que inspiran a otros; orientando, motivando y generando compromiso para afrontar el cambio y mejora.'
    },
    {
      nombre: 'Innovación',
      descripcion: 'Construimos, mejoramos y renovamos nuestra realidad, inspirándonos en nuevas ideas.'
    },
    {
      nombre: 'Alto desempeño',
      descripcion: 'Nos comprometemos a realizar un trabajo de excelencia educativa con un propósito de trascendencia, logrando resultados oportunos y de calidad.'
    },
    {
      nombre: 'Trabajo en equipo',
      descripcion: 'Compartimos objetivos en común para lograr el éxito, aportando nuestros recursos profesionales con un alto sentido de unión y empatía.'
    }
  ];

  obtenerIconoValor(nombre: string): string {
    const iconos: {[key: string]: string} = {
      'Humanismo': 'fas fa-heart',
      'Responsabilidad': 'fas fa-handshake',
      'Liderazgo': 'fas fa-flag',
      'Innovación': 'fas fa-lightbulb',
      'Alto desempeño': 'fas fa-trophy',
      'Trabajo en equipo': 'fas fa-users'
    };
    
    return iconos[nombre] || 'fas fa-star';
  }
}