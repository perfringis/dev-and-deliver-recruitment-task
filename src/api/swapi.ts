import { HttpException, Injectable } from '@nestjs/common';
import { FilmData } from './data/film.data';

@Injectable()
export class StarWarsAPI {
  private readonly BASE_URL = 'https://swapi.tech/api';

  public async getFilms() {
    try {
      const response = await fetch(`${this.BASE_URL}/films`);
      if (!response.ok) {
        throw new HttpException(
          `[SWAPI] Message: ${response.statusText}`,
          response.status,
        );
      }

      const json = await response.json();
      return json;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  public async getFilm(id: string): Promise<FilmData> {
    try {
      const response = await fetch(`${this.BASE_URL}/films/${id}`);
      if (!response.ok) {
        throw new HttpException(
          `[SWAPI] Message: ${response.statusText}`,
          response.status,
        );
      }

      const json = await response.json();
      return this.toFilmData(json);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
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

  private toFilmData(data): FilmData {
    const filmData: FilmData = new FilmData();
    filmData.setId(data.result.uid);
    filmData.setTitle(data.result.properties.title);
    filmData.setEpisodeId(data.result.properties.episode_id);
    filmData.setOpeningCrawl(data.result.properties.opening_crawl);
    filmData.setDirector(data.result.properties.director);
    filmData.setProducer(data.result.properties.producer);
    filmData.setReleaseDate(data.result.properties.release_date);
    filmData.setSpecies(data.result.properties.species);
    filmData.setStarships(data.result.properties.starships);
    filmData.setVehicles(data.result.properties.vehicles);
    filmData.setCharacters(data.result.properties.characters);
    filmData.setPlanets(data.result.properties.planets);
    filmData.setUrl(data.result.properties.url);
    filmData.setCreatedAt(data.result.properties.created);
    filmData.setEditedAt(data.result.properties.edited);

    return filmData;
  }
}
