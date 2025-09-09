import { Component } from '@angular/core';
import { Header } from '../../../componentes/header/header';
import { Footer } from '../../../componentes/footer/footer';

@Component({
  selector: 'app-himno',
  imports: [Header, Footer],
  templateUrl: './himno.html',
  styleUrls: ['./himno.css']
})
export class Himno {
}