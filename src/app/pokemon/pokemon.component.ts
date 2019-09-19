import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  selectedPokemon: Pokemon;

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  getPokemon(): void {
    this.pokemonService.getPokemon()
      .subscribe(pokemon => this.pokemons = pokemon);
  }

  shuffle(pokemons: Pokemon[]) {
    let counter = pokemons.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);

      counter--;

      const temp = pokemons[counter];
      pokemons[counter] = pokemons[index];
      pokemons[index] = temp;
    }

    return pokemons;
  }
}
