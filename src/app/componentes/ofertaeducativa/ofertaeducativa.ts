import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ofertaeducativa',
  templateUrl: './ofertaeducativa.html',
  styleUrls: ['./ofertaeducativa.css'],
  imports: [RouterLink]
})
export class Ofertaeducativa {
  // Propiedades para controlar el estado de cada dropdown
  showLicenciaturas = false;
  showIngenierias = false;
  showDistancia = false;
  showPosgrados = false;

  // Método para alternar el estado de un dropdown específico
  toggleDropdown(dropdownName: string): void {
    switch(dropdownName) {
      case 'licenciaturas':
        this.showLicenciaturas = !this.showLicenciaturas;
        // Cerrar los demás dropdowns
        this.showIngenierias = false;
        this.showDistancia = false;
        this.showPosgrados = false;
        break;
      case 'ingenierias':
        this.showIngenierias = !this.showIngenierias;
        // Cerrar los demás dropdowns
        this.showLicenciaturas = false;
        this.showDistancia = false;
        this.showPosgrados = false;
        break;
      case 'distancia':
        this.showDistancia = !this.showDistancia;
        // Cerrar los demás dropdowns
        this.showLicenciaturas = false;
        this.showIngenierias = false;
        this.showPosgrados = false;
        break;
      case 'posgrados':
        this.showPosgrados = !this.showPosgrados;
        // Cerrar los demás dropdowns
        this.showLicenciaturas = false;
        this.showIngenierias = false;
        this.showDistancia = false;
        break;
    }
  }

  // Método para cerrar todos los dropdowns
  closeAllDropdowns(): void {
    this.showLicenciaturas = false;
    this.showIngenierias = false;
    this.showDistancia = false;
    this.showPosgrados = false;
  }
}