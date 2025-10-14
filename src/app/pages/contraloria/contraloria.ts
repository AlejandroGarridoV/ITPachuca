// contraloria.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contraloria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contraloria.html',
  styleUrls: ['./contraloria.css']
})
export class ContraloriaComponent implements OnInit {
  activeTab: string = 'documentos2025';
  activeProgram: string = 'S247';
  activeSection: string = 'Mostrar_S247';
  
  programas = {
    'S247': {
      nombre: 'Programa para el Desarrollo Profesional Docente',
      secciones: ['Mostrar_S247', 'Mostrar_Contraloria_S247', 'Mostrar_Documento_S247', 
                 'Mostrar_Informes_S247', 'Mostrar_Quejas_S247', 'Mostrar_SICS_S247']
    },
    'E010': {
      nombre: 'Servicios de Educación Superior y Posgrado',
      secciones: ['Mostrar_E010', 'Mostrar_Contraloria_E010', 'Mostrar_Documento_E010', 
                 'Mostrar_Informes_E010', 'Mostrar_Quejas_E010', 'Mostrar_SICS_E010']
    },
    'E021': {
      nombre: 'Investigación Científica y Desarrollo Tecnológico',
      secciones: ['Mostrar_E021', 'Mostrar_Contraloria_E021', 'Mostrar_Documento_E021', 
                 'Mostrar_Informes_E021', 'Mostrar_Quejas_E021', 'Mostrar_SICS_E021']
    }
  };

  constructor() { }

  ngOnInit(): void {
    // Inicializar con el primer programa activo
    this.activateProgram('S247', 'Mostrar_S247');
  }

  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  activateProgram(programa: string, seccion: string): void {
    this.activeProgram = programa;
    this.activeSection = seccion;
  }

  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  isProgramActive(programa: string): boolean {
    return this.activeProgram === programa;
  }

  isSectionActive(seccion: string): boolean {
    return this.activeSection === seccion;
  }

  toggleCollapse(elementId: string): void {
    // Esta función simularía el comportamiento de colapso
    // En una implementación real, usaríamos directivas de Angular
    console.log(`Toggle collapse for: ${elementId}`);
  }
}