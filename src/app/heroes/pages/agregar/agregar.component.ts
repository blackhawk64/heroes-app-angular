import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: '',
  };

  constructor(
    private _route: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroe(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  nuevoHeroe() {
    if (this.heroe.superhero.trim().length === 0) return;

    if (this.heroe.id) {
      this._heroesService.editarHeroe(this.heroe).subscribe((response) => {
        console.log('Actualizacion OK', response);
      });
    } else {
      this._heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this._router.navigate(['/heroes', heroe.id]);
      });
    }
  }
}
