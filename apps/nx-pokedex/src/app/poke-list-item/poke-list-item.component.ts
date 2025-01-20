import { Component, input } from '@angular/core';
import { IPokedexEntry, PokedexEntryStatus } from '../services/pokedex.service';

@Component({
  selector: 'app-poke-list-item',
  standalone: false,
  templateUrl: './poke-list-item.component.html',
  styleUrl: './poke-list-item.component.scss',
})
export class PokeListItemComponent {
  pokemon = input.required<IPokedexEntry>();

  /*   public itemAttributes = computed(() => {
    switch(this.pokemon().status) {
      case PokedexEntryStatus.None:
        return {
          name: '?????',
          spriteIcon: 'assets/unknown-icon.svg',
          caughtIcon: null
        }
      case PokedexEntryStatus.Seen:
        return {
          name: this.pokemon().name,
          spriteIcon: this.pokemon().sprites.icons.front_default,
          caughtIcon: '/assets/icons/pkm-catch-status--bl.svg'
        }
      case PokedexEntryStatus.Caught:
        return {
          name: this.pokemon().name,
          spriteIcon: this.pokemon().sprites.icons.front_default,
          caughtIcon: '/assets/icons/pkm-catch-status--rd.svg'
        }
    }
  }); */

  public readonly PokedexEntryStatus = PokedexEntryStatus;
}
