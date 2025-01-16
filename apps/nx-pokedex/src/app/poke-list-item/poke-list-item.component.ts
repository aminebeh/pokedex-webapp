import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-list-item.component.html',
  styleUrl: './poke-list-item.component.scss',
})
export class PokeListItemComponent {}
