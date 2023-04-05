import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../pages/interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string, limiteResultados: number = 6): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`, {
      params: {
        q: termino,
        _limit: limiteResultados
      }
    });
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  editarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }
}
