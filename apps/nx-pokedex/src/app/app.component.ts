import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PokeListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-pokedex';
}
