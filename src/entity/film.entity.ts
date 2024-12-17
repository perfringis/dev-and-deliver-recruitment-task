import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Species } from './species.entity';
import { Starship } from './starship.entity';
import { Vehicle } from './vehicle.entity';
import { Person } from './person.entity';
import { Planet } from './planet.entity';

@Entity({ name: 'film' })
export class Film {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  private id: string;

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

  @Column({ name: 'release_date', type: 'date' })
  private releaseDate: Date;

  @Column({ name: 'created_at', type: 'timestamptz' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'timestamptz' })
  private editedAt: string;

  @ManyToMany(() => Species, (species) => species.films)
  @JoinTable({
    name: 'films_species',
    joinColumn: { name: 'film_id' },
    inverseJoinColumn: { name: 'species_id' },
  })
  public species: Species[];

  @ManyToMany(() => Starship, (starship) => starship.films)
  @JoinTable({
    name: 'films_starships',
    joinColumn: { name: 'film_id' },
    inverseJoinColumn: { name: 'starship_id' },
  })
  public starships: Starship[];

  @ManyToMany(() => Vehicle, (vehicle) => vehicle.films)
  @JoinTable({
    name: 'films_vehicles',
    joinColumn: { name: 'film_id' },
    inverseJoinColumn: { name: 'vehicle_id' },
  })
  public vehicles: Vehicle[];

  @ManyToMany(() => Person, (person) => person.films)
  @JoinTable({
    name: 'films_characters',
    joinColumn: { name: 'film_id' },
    inverseJoinColumn: { name: 'person_id' },
  })
  public characters: Person[];

  @ManyToMany(() => Planet, (planet) => planet.films)
  @JoinTable({
    name: 'films_planets',
    joinColumn: { name: 'film_id' },
    inverseJoinColumn: { name: 'planet_id' },
  })
  public planets: Planet[];
}
