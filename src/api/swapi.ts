import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FilmData } from './data/film.data';
import { PersonData } from './data/person.data';
import { PlanetData } from './data/planet.data';
import { SpeciesData } from './data/species.data';
import { StarshipData } from './data/starship.data';
import { VehicleData } from './data/vehicle.data';

@Injectable()
export class StarWarsAPI {
  private readonly BASE_URL = 'https://swapi.tech/api';

  public async getFilm(id: string): Promise<FilmData> {
    const response = await this.call(`${this.BASE_URL}/films/${id}`);
    return this.toFilmData(response);
  }

  public async getFilms(page: number, limit: number): Promise<FilmData[]> {
    const response = await this.call(
      `${this.BASE_URL}/films?page=${page}&limit=${limit}`,
    );
    return await this.toFilms(response);
  }

  public async getPerson(id: string): Promise<PersonData> {
    const response = await this.call(`${this.BASE_URL}/people/${id}`);
    return this.toPerson(response);
  }

  public async getPeople(): Promise<PersonData[]> {
    const response = await this.call(`${this.BASE_URL}/people?page=1&limit=82`);
    return this.toPeople(response);
  }

  public async getPlanet(id: string): Promise<PlanetData> {
    const response = await this.call(`${this.BASE_URL}/planets/${id}`);
    return this.toPlanet(response);
  }

  public async getPlanets(): Promise<PlanetData[]> {
    const response = await this.call(
      `${this.BASE_URL}/planets?page=1&limit=60`,
    );
    return this.toPlanets(response);
  }

  public async getKind(id: string): Promise<SpeciesData> {
    const response = await this.call(`${this.BASE_URL}/species/${id}`);
    return this.toKind(response);
  }

  public async getSpecies(): Promise<SpeciesData[]> {
    const response = await this.call(
      `${this.BASE_URL}/species?page=1&limit=37`,
    );
    return this.toSpecies(response);
  }

  public async getStarShip(id: string): Promise<StarshipData> {
    const response = await this.call(`${this.BASE_URL}/starships/${id}`);
    return this.toStarship(response);
  }

  public async getStarShips(): Promise<StarshipData[]> {
    const response = await this.call(
      `${this.BASE_URL}/starships?page=1&limit=36`,
    );
    return this.toStarships(response);
  }

  public async getVehicle(id: string): Promise<VehicleData> {
    const response = await this.call(`${this.BASE_URL}/vehicles/${id}`);
    return this.toVehicle(response);
  }

  public async getVehicles(): Promise<VehicleData[]> {
    const response = await this.call(
      `${this.BASE_URL}/vehicles?page=1&limit=39`,
    );
    return this.toVehicles(response);
  }

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

  private toFilm(data): FilmData {
    const filmData: FilmData = new FilmData();

    filmData.setId(data.uid);
    filmData.setTitle(data.properties.title);
    filmData.setEpisodeId(data.properties.episode_id);
    filmData.setOpeningCrawl(data.properties.opening_crawl);
    filmData.setDirector(data.properties.director);
    filmData.setProducer(data.properties.producer);
    filmData.setReleaseDate(data.properties.release_date);
    filmData.setSpecies(data.properties.species);
    filmData.setStarships(data.properties.starships);
    filmData.setVehicles(data.properties.vehicles);
    filmData.setCharacters(data.properties.characters);
    filmData.setPlanets(data.properties.planets);
    filmData.setUrl(data.properties.url);
    filmData.setCreatedAt(data.properties.created);
    filmData.setEditedAt(data.properties.edited);

    return filmData;
  }

  private async toFilms(films): Promise<FilmData[]> {
    return await Promise.all(
      films.result.map(async (film) => this.toFilm(film)),
    );
  }

  private toPerson(data): PersonData {
    const personData: PersonData = new PersonData();

    personData.setId(data.result.uid);
    personData.setName(data.result.properties.name);
    personData.setBirthYear(data.result.properties.birth_year);
    personData.setEyeColor(data.result.properties.eye_color);
    personData.setGender(data.result.properties.gender);
    personData.setHairColor(data.result.properties.hair_color);
    personData.setHeight(data.result.properties.height);
    personData.setMass(data.result.properties.mass);
    personData.setSkinColor(data.result.properties.skin_color);
    personData.setHomeWorld(data.result.properties.homeworld);
    personData.setFilms(data.result.properties.films);
    personData.setSpecies(data.result.properties.species);
    personData.setStarships(data.result.properties.starships);
    personData.setVehicles(data.result.properties.vehicles);
    personData.setUrl(data.result.properties.url);
    personData.setCreatedAt(data.result.properties.created);
    personData.setEditedAt(data.result.properties.edited);

    return personData;
  }

  private toPeople(data): PersonData[] {
    return data.result.map((data) => this.toPerson(data));
  }

  private toPlanet(data): PlanetData {
    const planetData: PlanetData = new PlanetData();

    planetData.setId(data.result.uid);
    planetData.setName(data.result.properties.name);
    planetData.setDiameter(data.result.properties.diameter);
    planetData.setRotationPeriod(data.result.properties.rotation_period);
    planetData.setOrbitalPeriod(data.result.properties.orbital_period);
    planetData.setGravity(data.result.properties.gravity);
    planetData.setPopulation(data.result.properties.population);
    planetData.setClimate(data.result.properties.climate);
    planetData.setTerrain(data.result.properties.terrain);
    planetData.setSurfaceWater(data.result.properties.surface_water);
    planetData.setResidents(data.result.properties.residents);
    planetData.setFilms(data.result.properties.films);
    planetData.setUrl(data.result.properties.url);
    planetData.setCreatedAt(data.result.properties.created);
    planetData.setEditedAt(data.result.properties.edited);

    return planetData;
  }

  private toPlanets(data): PlanetData[] {
    return data.result.map((data) => this.toPlanet(data));
  }

  private toKind(data): SpeciesData {
    const speciesData: SpeciesData = new SpeciesData();

    speciesData.setId(data.result.uid);
    speciesData.setName(data.result.properties.name);
    speciesData.setClassification(data.result.properties.classification);
    speciesData.setDesignation(data.result.properties.designation);
    speciesData.setAverageHeight(data.result.properties.average_height);
    speciesData.setAverageLifespan(data.result.properties.average_lifespan);
    speciesData.setEyeColors(data.result.properties.eye_colors);
    speciesData.setHairColors(data.result.properties.hair_colors);
    speciesData.setSkinColors(data.result.properties.skin_colors);
    speciesData.setLanguage(data.result.properties.language);
    speciesData.setHomeWorld(data.result.properties.homeworld);
    speciesData.setPeople(data.result.properties.people);
    speciesData.setFilms(data.result.properties.films);
    speciesData.setUrl(data.result.properties.url);
    speciesData.setCreatedAt(data.result.properties.created);
    speciesData.setEditedAt(data.result.properties.edited);

    return speciesData;
  }

  private toSpecies(data): SpeciesData[] {
    return data.result.map((data) => this.toKind(data));
  }

  private toStarship(data): StarshipData {
    const starshipData: StarshipData = new StarshipData();

    starshipData.setId(data.result.uid);
    starshipData.setName(data.result.properties.name);
    starshipData.setModel(data.result.properties.model);
    starshipData.setStarshipClass(data.result.properties.starship_class);
    starshipData.setManufacturer(data.result.properties.manufacturer);
    starshipData.setCostInCredits(data.result.properties.cost_in_credits);
    starshipData.setLength(data.result.properties.length);
    starshipData.setCrew(data.result.properties.crew);
    starshipData.setPassengers(data.result.properties.passengers);
    starshipData.setMaxAtmospheringSpeed(
      data.result.properties.max_atmosphering_speed,
    );
    starshipData.setHyperDriveRating(data.result.properties.hyperdrive_rating);
    starshipData.setMglt(data.result.properties.MGLT);
    starshipData.setCargoCapacity(data.result.properties.cargo_capacity);
    starshipData.setConsumables(data.result.properties.consumables);
    starshipData.setFilms(data.result.properties.films);
    starshipData.setPilots(data.result.properties.pilots);
    starshipData.setUrl(data.result.properties.url);
    starshipData.setCreatedAt(data.result.properties.created);
    starshipData.setEditedAt(data.result.properties.edited);

    return starshipData;
  }

  private toStarships(data): StarshipData[] {
    return data.result.map((data) => this.toStarship(data));
  }

  private toVehicle(data): VehicleData {
    const vehicleData: VehicleData = new VehicleData();

    vehicleData.setId(data.result.uid);
    vehicleData.setName(data.result.properties.name);
    vehicleData.setModel(data.result.properties.model);
    vehicleData.setVehicleClass(data.result.properties.vehicle_class);
    vehicleData.setManufacturer(data.result.properties.manufacturer);
    vehicleData.setLength(data.result.properties.length);
    vehicleData.setCostInCredits(data.result.properties.cost_in_credits);
    vehicleData.setCrew(data.result.properties.crew);
    vehicleData.setPassengers(data.result.properties.passengers);
    vehicleData.setMaxAtmospheringSpeed(
      data.result.properties.max_atmosphering_speed,
    );
    vehicleData.setCargoCapacity(data.result.properties.cargo_capacity);
    vehicleData.setConsumables(data.result.properties.consumables);
    vehicleData.setFilms(data.result.properties.films);
    vehicleData.setPilots(data.result.properties.pilots);
    vehicleData.setUrl(data.result.properties.url);
    vehicleData.setCreatedAt(data.result.properties.created);
    vehicleData.setEditedAt(data.result.properties.edited);

    return vehicleData;
  }

  private toVehicles(data): VehicleData[] {
    return data.result.map((data) => this.toVehicle(data));
  }

  private async call(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new BadRequestException(`[SWAPI] ${response.statusText}`);
          case 404:
            throw new NotFoundException(`[SWAPI] ${response.statusText}`);
          case 500:
            throw new InternalServerErrorException(
              `[SWAPI] ${response.statusText}`,
            );
          default:
            throw new HttpException(
              `[SWAPI] Unexpected error: ${response.statusText}`,
              response.status,
            );
        }
      }

      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  }
}
