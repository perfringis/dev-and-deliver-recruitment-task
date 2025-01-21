import { BaseEntity } from 'src/utils/database/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'film' })
export class Film extends BaseEntity {
  @Column({ name: 'title', type: 'varchar' })
  private title: string;

  @Column({ name: 'episode_id', type: 'varchar' })
  private episodeId: string;

  @Column({ name: 'opening_crawl', type: 'varchar' })
  private openingCrawl: string;

  @Column({ name: 'director', type: 'varchar' })
  private director: string;

  @Column({ name: 'producer', type: 'varchar' })
  private producer: string;

  @Column({ name: 'release_date', type: 'varchar' })
  private releaseDate: string;

  @Column({ name: 'species', type: 'simple-array' })
  private species: string[];

  @Column({ name: 'starships', type: 'simple-array' })
  private starships: string[];

  @Column({ name: 'vehicles', type: 'simple-array' })
  private vehicles: string[];

  @Column({ name: 'characters', type: 'simple-array' })
  private characters: string[];

  @Column({ name: 'planets', type: 'simple-array' })
  private planets: string[];

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
}
