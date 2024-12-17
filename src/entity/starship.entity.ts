import { Column, Entity, OneToMany } from 'typeorm';
import { Film } from './film.entity';
import { Person } from './person.entity';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'starship' })
export class Starship extends BaseEntity {
  @Column({ name: 'name' })
  private name: string;

  @Column({ name: 'model' })
  private model: string;

  @Column({ name: 'starship_class' })
  private starshipClass: string;

  @Column({ name: 'manufacturer' })
  private manufacturer: string;

  @Column({ name: 'cost_in_credits' })
  private costInCredits: string;

  @Column({ name: 'length' })
  private length: string;

  @Column({ name: 'crew' })
  private crew: string;

  @Column({ name: 'passengers' })
  private passengers: string;

  @Column({ name: 'max_atmosphering_speed' })
  private maxAtmospheringSpeed: string;

  @Column({ name: 'hyper_drive_rating' })
  private hyperDriveRating: string;

  @Column({ name: 'mglt' })
  private mglt: string;

  @Column({ name: 'cargo_capacity' })
  private cargoCapacity: string;

  @Column({ name: 'consumables' })
  private consumables: string;

  @OneToMany(() => Film, (film) => film.starships)
  public films: Film[];

  @OneToMany(() => Person, (person) => person.starships)
  public pilots: Person[];
}
