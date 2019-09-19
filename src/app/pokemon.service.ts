import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMON} from "./top-20-pokemon";
import { Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemon(): Observable<Pokemon[]> {
    return of (POKEMON);
  }

  constructor() { }
}
