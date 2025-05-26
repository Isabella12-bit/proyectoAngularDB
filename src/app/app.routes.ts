import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PersonajesComponent } from './paginas/personajes/personajes.component';
import { PlanetasComponent } from './paginas/planetas/planetas.component';
import { TransformacionesComponent } from './paginas/transformaciones/transformaciones.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'planetas', component: PlanetasComponent },
    { path: 'transformaciones', component: TransformacionesComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent },
];