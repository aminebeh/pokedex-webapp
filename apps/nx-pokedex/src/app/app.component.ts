import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeListModule } from './poke-list/poke-list.module';

@Component({
  standalone: true,
  imports: [RouterModule, PokeListModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-pokedex';
}
