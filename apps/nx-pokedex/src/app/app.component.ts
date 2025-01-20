import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, PokeListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-pokedex';
}
