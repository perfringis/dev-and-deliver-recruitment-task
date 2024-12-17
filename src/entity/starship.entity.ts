import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Film } from './film.entity';
import { Person } from './person.entity';

@Entity({ name: 'starship' })
export class Starship {
  @PrimaryColumn({ name: 'id' })
  private id: string;

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

  @Column({ name: 'created_at', type: 'timestamptz' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'timestamptz' })
  private editedAt: string;

  @OneToMany(() => Film, (film) => film.starships)
  public films: Film[];

  @OneToMany(() => Person, (person) => person.starships)
  public pilots: Person[];
}
