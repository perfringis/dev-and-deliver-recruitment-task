import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

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

  public getEpisodeId(): string {
    return this.episodeId;
  }

  public getOpeningCrawl(): string {
    return this.openingCrawl;
  }

  public getDirector(): string {
    return this.director;
  }

  public getProducer(): string {
    return this.producer;
  }

  public getReleaseDate(): string {
    return this.releaseDate;
  }

  public getSpecies(): string[] {
    return this.species;
  }

  public getStarships(): string[] {
    return this.starships;
  }

  public getVehicles(): string[] {
    return this.vehicles;
  }

  public getCharacters(): string[] {
    return this.characters;
  }

  public getPlanets(): string[] {
    return this.planets;
  }
}
