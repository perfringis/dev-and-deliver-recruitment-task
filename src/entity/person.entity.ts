import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Species } from './species.entity';
import { Film } from './film.entity';
import { Starship } from './starship.entity';
import { Vehicle } from './vehicle.entity';
import { Planet } from './planet.entity';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'person' })
export class Person extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  private name: string;

  @Column({ name: 'birth_year', type: 'varchar' })
  private birthYear: string;

  @Column({ name: 'eye_color', type: 'varchar' })
  private eyeColor: string;

  @Column({ name: 'gender', type: 'varchar' })
  private gender: string;

  @Column({ name: 'hair_color', type: 'varchar' })
  private hairColor: string;

  @Column({ name: 'height', type: 'float' })
  private height: number;

  @Column({ name: 'mass', type: 'float' })
  private mass: string;

  @Column({ name: 'skin_color', type: 'varchar' })
  private skinColor: string;

  @ManyToOne(() => Planet, (planet) => planet.residents)
  @JoinColumn({ name: 'planet_id' })
  public homeWorld: Planet;

  @OneToMany(() => Film, (film) => film.characters)
  public films: Film[];

  @ManyToMany(() => Species, (species) => species.people)
  @JoinTable({
    name: 'persons_species',
    joinColumn: { name: 'person_id' },
    inverseJoinColumn: { name: 'species_id' },
  })
  public species: Species[];

  @ManyToMany(() => Starship, (starship) => starship.pilots)
  @JoinTable({
    name: 'persons_starships',
    joinColumn: { name: 'person_id' },
    inverseJoinColumn: { name: 'starship_id' },
  })
  public starships: Starship[];

  @ManyToMany(() => Vehicle, (vehicle) => vehicle.pilots)
  @JoinTable({
    name: 'persons_vehicles',
    joinColumn: { name: 'person_id' },
    inverseJoinColumn: { name: 'vehicle_id' },
  })
  public vehicles: Vehicle[];
}
