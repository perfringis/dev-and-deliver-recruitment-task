import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/BaseEntity';

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
}
