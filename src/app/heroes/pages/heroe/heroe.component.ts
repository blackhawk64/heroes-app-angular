import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 7px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private _route: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._route.params
      .pipe(
        switchMap(({id}) => this._heroesService.getHeroe(id))
      )
      .subscribe(response => {
        this.heroe = response
      });
  }

}
