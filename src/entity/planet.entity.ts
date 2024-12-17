import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Person } from './person.entity';
import { Film } from './film.entity';

@Entity({ name: 'planet' })
export class Planet {
  @PrimaryColumn({ name: 'id', type: 'varchar' })
  private id: string;

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

  @Column({ name: 'created_at', type: 'timestamptz' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'timestamptz' })
  private editedAt: string;

  @OneToMany(() => Person, (person) => person.homeWorld)
  public residents: Person[];

  @OneToMany(() => Film, (film) => film.planets)
  public films: Film[];
}
