import { Component } from '@angular/core';
import { Header } from "../../../componentes/header/header";
import { Footer } from "../../../componentes/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posgrado',
  standalone: true,
  imports: [Header, Footer, RouterLink],
  templateUrl: './posgrado.html',
  styleUrl: './posgrado.css'
})
export class Posgrado {}
