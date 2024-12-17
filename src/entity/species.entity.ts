import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Planet } from './planet.entity';
import { Person } from './person.entity';
import { Film } from './film.entity';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'species' })
export class Species extends BaseEntity {
  @Column({ name: 'name' })
  private name: string;

  @Column({ name: 'classification' })
  private classification: string;

  @Column({ name: 'designation' })
  private designation: string;

  @Column({ name: 'average_height' })
  private averageHeight: string;

  @Column({ name: 'average_lifespan' })
  private averageLifespan: string;

  @Column({ name: 'eye_colors' })
  private eyeColors: string;

  @Column({ name: 'hair_colors' })
  private hairColors: string;

  @Column({ name: 'skinColors' })
  private skin_colors: string;

  @Column({ name: 'language' })
  private language: string;

  @OneToOne(() => Planet, (planet) => planet)
  @JoinColumn({ name: 'planet_id' })
  public homeWorld: Planet;

  @OneToMany(() => Person, (person) => person.species)
  public people: Person[];

  @OneToMany(() => Film, (film) => film.species)
  public films: Film[];
}
