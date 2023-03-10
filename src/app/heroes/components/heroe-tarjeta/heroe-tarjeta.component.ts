import { Component, Input } from '@angular/core';
import { Heroe } from '../../pages/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
        min-height: 700px;
      }
    `,
  ],
})
export class HeroeTarjetaComponent {
  @Input() heroe!: Heroe;

  constructor() {}
}
