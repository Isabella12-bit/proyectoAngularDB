// import { Component, inject } from '@angular/core';
// import { PersonajesComponent } from '../../paginas/personajes/personajes.component';
// import { Character } from '../../interfaces/character';
// import {CommonModule} from "@angular/common";
// import { CharactersService } from '../../characters.service';

// @Component({
//   selector: 'app-personaje',
//   imports: [PersonajesComponent, CommonModule],
//   templateUrl: './personaje.component.html',
//   styleUrl: './personaje.component.css'
// })
// export class PersonajeComponent {
//   personaje: Character[]= []
//   charactersService: CharactersService = inject(CharactersService);
//   constructor() {
//     this.personaje = this.charactersService.getAllCharacters()
//  }
// }
// import { Component, OnInit } from '@angular/core';
// import { CharactersService } from '../../characters.service';
// import { Character } from '../../interfaces/character';

// @Component({
//   selector: 'app-characters',
//   templateUrl: './personaje.component.html',
// })
// export class PersonajeComponent implements OnInit {
//   characters: Character[] = [];

//   constructor(private dbService: CharactersService) {}

//   ngOnInit(): void {
//     this.dbService.getCharacters().subscribe((data) => {
//       this.characters = data;
//     });
//   }
// }
// src/app/elementos/personaje/personaje.component.ts
import { Component, Input } from '@angular/core';
import { CharactersService } from '../../characters.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {
  @Input() personaje!: Character;  // 👈 recibe un personaje desde el padre
}
