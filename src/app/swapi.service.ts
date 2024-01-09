import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private httpClient: HttpClient) {}

  private basePath = 'https://swapi.dev/api/';

  //#region CHARACTERS
  getCharacters(page?: number): Observable<PaginatedResults<Character>> {
    return this.httpClient.get<PaginatedResults<Character>>(
      `${this.basePath}/people?page=${page}`
    );
  }

  getCharacter(id: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.basePath}/people/${id}`);
  }

  getCharacterHomePlanet(id: string): Observable<Planet> {
    return this.httpClient.get<Planet>(`${this.basePath}/planets/${id}`);
  }
  //#endregion

  //#region STAR SHIPS
  getStarShips(page?: number): Observable<PaginatedResults<Starship>> {
    return this.httpClient.get<PaginatedResults<Starship>>(
      `${this.basePath}/starships?page=${page}`
    );
  }

  getStarShip(id: string): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.basePath}/starships/${id}`);
  }
  //#endregion
}

export interface Character {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  starships: string[] | Starship[];
  url: string;
}
export interface Planet {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[] | Character[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[] | Character[];
  starship_class: string;
  url: string;
}

export interface PaginatedResults<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}
