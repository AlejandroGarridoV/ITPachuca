import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../componentes/header/header';
import { Footer } from '../../../componentes/footer/footer';

@Component({
  selector: 'app-escudo',
  imports: [CommonModule, Header, Footer],
  templateUrl: './escudo.html',
  styleUrls: ['./escudo.css']
})
export class Escudo {
  // Imagen principal (se liga en el HTML con [src])
  mainShield: string = 'tecnologico/EscudoTec/LITP-completo.png';

  // Cambia la imagen cuando pasa el mouse
  changeShield(imageUrl: string) {
    this.mainShield = imageUrl;
  }

  // Regresa la imagen por defecto al salir
  resetShield() {
    this.mainShield = 'tecnologico/EscudoTec/LITP-completo.png';
  }
}
