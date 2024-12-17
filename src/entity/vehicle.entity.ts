import { Column, Entity, OneToMany } from 'typeorm';
import { Film } from './film.entity';
import { Person } from './person.entity';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'vehicle' })
export class Vehicle extends BaseEntity {
  @Column({ name: 'name' })
  private name: string;

  @Column({ name: 'model' })
  private model: string;

  @Column({ name: 'vehicle_class' })
  private vehicleClass: string;

  @Column({ name: 'manufacturer' })
  private manufacturer: string;

  @Column({ name: 'length' })
  private length: string;

  @Column({ name: 'cost_in_credits' })
  private costInCredits: string;

  @Column({ name: 'crew' })
  private crew: string;

  @Column({ name: 'passengers' })
  private passengers: string;

  @Column({ name: 'max_atmosphering_speed' })
  private maxAtmospheringSpeed: string;

  @Column({ name: 'cargo_capacity' })
  private cargoCapacity: string;

  @Column({ name: 'consumables' })
  private consumables: string;

  @OneToMany(() => Film, (film) => film.vehicles)
  public films: Film[];

  @OneToMany(() => Person, (person) => person.vehicles)
  public pilots: Person[];
}
