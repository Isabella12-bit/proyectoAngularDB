import { Injectable } from '@angular/core';
import { Character } from './interfaces/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://www.dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}
// export class CharactersService {
//   personaje: Character[]= [
//   {
//   id: 1,
//   name: "Goku",
//   ki: "60.000.000",
//   maxKi: "90 Septillion",
//   race: "Saiyan",
//   gender: "Male",
//   description: "El protagonista de la serie, conocido por su gran ...",
//   image: "https://dragonball-api.com/characters/goku_normal....",
//   affiliation: "Z Fighter"
//   }, 
//   {"id":2,"name":"Vegeta","ki":"54.000.000","maxKi":"19.84 Septillion","race":"Saiyan","gender":"Male","description":"Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.","image":"https://dragonball-api.com/characters/vegeta_normal.webp","affiliation":"Z Fighter"}
//   ];

//   getAllCharacters(): Character[] {
//    return this.personaje;
//   }
//   getCharactersById(id: number): Character | undefined {
//     return this.personaje.find((personaje) => personaje.id === id);
//   }

// }
