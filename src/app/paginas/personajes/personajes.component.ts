// import { Component } from '@angular/core';
// import {Character} from "../../interfaces/character";
// import { PersonajeComponent } from '../../elementos/personaje/personaje.component';

// @Component({
//   selector: 'app-personajes',
//   standalone: true,
//   imports: [
//     PersonajeComponent
//   ],
//   templateUrl: './personajes.component.html',
//   styleUrl: './personajes.component.css'
// })
// export class PersonajesComponent {

// }
import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../characters.service';
import { Character } from '../../interfaces/character';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from '../../elementos/personaje/personaje.component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, PersonajeComponent],
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  searchTerm: string = '';

  constructor(private dbService: CharactersService) {}

  ngOnInit(): void {
    this.dbService.getCharacters().subscribe((data) => {
      this.characters = data;
      this.filteredCharacters = data;
    });
  }

  buscar(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCharacters = this.characters.filter((c) =>
      c.name.toLowerCase().includes(term)
    );
  }
}
