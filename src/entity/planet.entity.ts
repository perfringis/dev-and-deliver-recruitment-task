import { Column, Entity, OneToMany } from 'typeorm';
import { Person } from './person.entity';
import { Film } from './film.entity';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'planet' })
export class Planet extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  private name: string;

  @Column({ name: 'diameter', type: 'int' })
  private diameter: string;

  @Column({ name: 'rotation_period', type: 'int' })
  private rotationPeriod: string;

  @Column({ name: 'orbital_period', type: 'int' })
  private orbitalPeriod: string;

  @Column({ name: 'gravity', type: 'varchar' })
  private gravity: string;

  @Column({ name: 'population' })
  private population: string;

  @Column({ name: 'climate' })
  private climate: string;

  @Column({ name: 'terrain' })
  private terrain: string;

  @Column({ name: 'surface_water' })
  private surfaceWater: string;

  @OneToMany(() => Person, (person) => person.homeWorld)
  public residents: Person[];

  @OneToMany(() => Film, (film) => film.planets)
  public films: Film[];
}
