import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) => console.log(id));
  }
}
