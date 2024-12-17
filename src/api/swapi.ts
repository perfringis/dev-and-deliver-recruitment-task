import { Injectable } from '@nestjs/common';

@Injectable()
export class StarWasAPI {
  private readonly BASE_URL = 'https://swapi.tech/api';

  public async getFilms() {
    try {
      const response = await fetch(`${this.BASE_URL}/films`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  public async getFilm(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.BASE_URL}/films/${id}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  // public async getPeople() {}
  //
  // public async getPerson(id: string) {}
  //
  // public async getPlanets() {}
  //
  // public async getPlanet(id: string) {}
  //
  // public async getSpecies() {}
  //
  // public async getKind(id: string) {}
  //
  // public async getStarShips() {}
  //
  // public async getStarShip(id: string) {}
  //
  // public async getVehicles() {}
  //
  // public async getVehicle(id: string) {}
}
