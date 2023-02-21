import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
    .ancho-completo{
      width: 100%;
    }
  `],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe() {
    let terminoLimpio = this.termino.trim();
    if (terminoLimpio.length > 0) {
      this._heroesService
        .getSugerencias(terminoLimpio)
        .subscribe((response) => (this.heroes = response));
    } else {
      this.heroes = [];
    }
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
  }
}
