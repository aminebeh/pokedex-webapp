import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  model,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import {
  IPokedexEntry,
  PokedexEntryStatus,
  PokedexService,
} from '../services/pokedex.service';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
  providers: [PokedexService],
})
export class PokeListComponent {
  public pokedexEntries$: Signal<IPokedexEntry[]>;
  public pokedexSortCriteria$ = model('id');
  public sortedPokedexEntries$ = computed(() =>
    this.sortPokedexEntries(this.pokedexEntries$(), this.pokedexSortCriteria$())
  );
  public selectedPokemon$: WritableSignal<IPokedexEntry | null> = signal(null);

  public catchedTotal$: Signal<number> = computed(
    () =>
      this.pokedexEntries$().filter(
        (entry) => entry.status === PokedexEntryStatus.Caught
      ).length
  );

  public seenTotal$: Signal<number> = computed(
    () =>
      this.pokedexEntries$().filter(
        (entry) => entry.status === PokedexEntryStatus.Seen
      ).length
  );

  public catchedAndSeenTotal$: Signal<number> = computed(
    () => this.catchedTotal$() + this.seenTotal$()
  );

  public readonly PokedexEntryStatus = PokedexEntryStatus;

  private pokedexSortEffect = effect(() => {
    console.log('Pokedex sort criteria (effect):', this.pokedexSortCriteria$());
    // this.sortPokedex(this.pokedexSortCriteria$());
  });

  private selectedPokemonEffect = effect(() => {
    console.log('Selected pokemon (effect):', this.selectedPokemon$());
  });

  constructor(private pokedexService: PokedexService) {
    this.pokedexEntries$ = toSignal(this.pokedexService.getPokedexEntries(), {
      initialValue: [],
    });
    /* 
    effect(() => {
      console.log('Pokedex entries:', this.pokedexEntries$());
      console.log('Selected pokemon:', this.selectedPokemon$());
      
    }); */
  }

  selectPokemon(pokemon: IPokedexEntry): void {
    this.selectedPokemon$.set(pokemon);
  }

  seePokemon(pokemon: IPokedexEntry): void {
    console.log('Seen pokemon:', pokemon);
    // this.selectedPokemon$.set(pokemon);
  }

  sortPokedexEntries(
    entries: IPokedexEntry[],
    criteria: string
  ): IPokedexEntry[] {
    return entries.sort((a, b) => {
      switch (criteria) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'id':
          return a.id - b.id;
        case 'height':
          return a.height - b.height;
        case 'weight':
          return a.weight - b.weight;
        default:
          return 0;
      }
    });
  }
}
