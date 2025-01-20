import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeListItemComponent } from '../poke-list-item/poke-list-item.component';
import { PokedexService } from '../services/pokedex.service';
import { PokeListComponent } from './poke-list.component';

@NgModule({
  declarations: [PokeListComponent, PokeListItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [PokeListComponent],
  providers: [PokedexService],
})
export class PokeListModule {}
