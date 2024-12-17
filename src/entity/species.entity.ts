import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Planet } from './planet.entity';
import { Person } from './person.entity';
import { Film } from './film.entity';

@Entity({ name: 'species' })
export class Species {
  @PrimaryColumn({ name: 'id' })
  private id: string;

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

  @Column({ name: 'created_at', type: 'timestamptz' })
  private createdAt: string;

  @Column({ name: 'edited_at', type: 'timestamptz' })
  private editedAt: string;

  @OneToOne(() => Planet, (planet) => planet)
  @JoinColumn({ name: 'planet_id' })
  public homeWorld: Planet;

  @OneToMany(() => Person, (person) => person.species)
  public people: Person[];

  @OneToMany(() => Film, (film) => film.species)
  public films: Film[];
}
