import { Film } from 'src/film/film.entity';

export class FilmDTO {
  private title: string;
  private episodeId: string;
  private openingCrawl: string;
  private director: string;
  private producer: string;
  private releaseDate: string;
  private species: string[];
  private starships: string[];
  private vehicles: string[];
  private characters: string[];
  private planets: string[];
  private url: string;
  private cachedAt: Date;

  constructor(film: Film) {
    this.title = film.getTitle();
    this.episodeId = film.getEpisodeId();
    this.openingCrawl = film.getOpeningCrawl();
    this.director = film.getDirector();
    this.producer = film.getProducer();
    this.releaseDate = film.getReleaseDate();
    this.species = film.getSpecies();
    this.starships = film.getStarships();
    this.vehicles = film.getVehicles();
    this.characters = film.getCharacters();
    this.planets = film.getPlanets();
    this.url = film.getUrl();
    this.cachedAt = film.getCachedAt();
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(value: string) {
    this.title = value;
  }

  public getEpisodeId(): string {
    return this.episodeId;
  }

  public setEpisodeId(value: string) {
    this.episodeId = value;
  }

  public getOpeningCrawl(): string {
    return this.openingCrawl;
  }

  public setOpeningCrawl(value: string) {
    this.openingCrawl = value;
  }

  public getDirector(): string {
    return this.director;
  }

  public setDirector(value: string) {
    this.director = value;
  }

  public getProducer(): string {
    return this.producer;
  }

  public setProducer(value: string) {
    this.producer = value;
  }

  public getReleaseDate(): string {
    return this.releaseDate;
  }

  public setReleaseDate(value: string) {
    this.releaseDate = value;
  }

  public getSpecies(): string[] {
    return this.species;
  }

  public setSpecies(value: string[]) {
    this.species = value;
  }

  public getStarships(): string[] {
    return this.starships;
  }

  public setStarships(value: string[]) {
    this.starships = value;
  }

  public getVehicles(): string[] {
    return this.vehicles;
  }

  public setVehicles(value: string[]) {
    this.vehicles = value;
  }

  public getCharacters(): string[] {
    return this.characters;
  }

  public setCharacters(value: string[]) {
    this.characters = value;
  }

  public getPlanets(): string[] {
    return this.planets;
  }

  public setPlanets(value: string[]) {
    this.planets = value;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }

  public getCachedAt(): Date {
    return this.cachedAt;
  }

  public setCachedAt(value: Date) {
    this.cachedAt = value;
  }
}
