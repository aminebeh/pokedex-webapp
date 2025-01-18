import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pokemons } from './pokemon-list.mock';

export interface IPokemon {
  name: string;
  id: number;
  sprites: {
    icons: { front_default: string };
    showdown: string;
  };
  height: number;
  weight: number;
}

export enum PokedexEntryStatus {
  Caught = 'caught',
  Seen = 'seen',
  None = 'none',
}

export interface IPokedexEntry extends IPokemon {
  status: PokedexEntryStatus;
}

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  getPokemons(): Observable<IPokemon[]> {
    return of(pokemons);
  }

  getPokedexEntries(): Observable<IPokedexEntry[]> {
    return of(
      pokemons.map((pokemon) => ({
        ...pokemon,
        status: this.getRandomStatus(),
      }))
    );
  }

  private getRandomStatus(): PokedexEntryStatus {
    const statuses = Object.values(PokedexEntryStatus);
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }
}
