import { Component } from '@angular/core';
import { Footer } from "../../../../componentes/footer/footer";
import { Header } from "../../../../componentes/header/header";

@Component({
  selector: 'app-administracion',
  imports: [Footer, Header],
  templateUrl: './administracion.html',
  styleUrl: './administracion.css'
})
export class Administracion {
  // Datos para el perfil profesional (opcional, puedes usar esto para hacerlo más dinámico)
  professionalSkills = [
    {
      category: 'Habilidades Estratégicas',
      icon: 'chart-line',
      skills: [
        { icon: 'lightbulb', text: 'Analiza e interpreta información administrativa, económica, financiera, legal y social para la toma de decisiones.' },
        { icon: 'chess', text: 'Desarrolla investigación para la solución de problemas administrativos y proyectos en el área de su competencia.' },
        { icon: 'chart-pie', text: 'Conoce y utiliza las herramientas financieras de la organización para maximizar el valor de la empresa.' },
        { icon: 'project-diagram', text: 'Analiza, innova, diseña, implementa y evalúa los sistemas y modelos administrativos.' }
      ]
    },
    {
      category: 'Liderazgo y Trabajo en Equipo',
      icon: 'users',
      skills: [
        { icon: 'hands-helping', text: 'Integra, coordina y dirige equipos de trabajo multidisciplinarios promoviendo la participación.' },
        { icon: 'bullhorn', text: 'Desarrolla habilidades para comunicarse e implementa modelos, sistemas y estrategias de comunicación.' },
        { icon: 'user-tie', text: 'Desarrolla capacidades y habilidades para ejercer estilos de liderazgo acorde con las características organizacionales.' },
        { icon: 'users-cog', text: 'Promueve la competitividad profesional y organizacional, propiciando una cultura de trabajo en equipo.' }
      ]
    },
    {
      category: 'Visión Global',
      icon: 'globe',
      skills: [
        { icon: 'language', text: 'Comprende artículos y textos técnico-científicos de su área profesional en una lengua extranjera.' },
        { icon: 'balance-scale', text: 'Observa el marco legal vigente relacionado con el ejercicio de su profesión.' },
        { icon: 'globe-americas', text: 'Visualiza, analiza y actúa ante las condiciones de los diferentes escenarios económicos y multiculturales.' },
        { icon: 'handshake', text: 'Desarrolla habilidades de gestión y vinculación con el entorno de la organización.' }
      ]
    }
  ];

  // Lógica para el acordeón (si decides usar esa versión)
  toggleAccordion(event: Event): void {
    const accordionHeader = event.target as HTMLElement;
    const accordionItem = accordionHeader.closest('.accordion-item');
    
    if (accordionItem) {
      accordionItem.classList.toggle('active');
      
      // Cerrar los demás items
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active');
        }
      });
    }
  }
}