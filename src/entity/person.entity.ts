import { Column, Entity } from 'typeorm';
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

  @Column({ name: 'height', type: 'varchar' })
  private height: string;

  @Column({ name: 'mass', type: 'varchar' })
  private mass: string;

  @Column({ name: 'skin_color', type: 'varchar' })
  private skinColor: string;

  @Column({ name: 'home_world', type: 'varchar' })
  private homeWorld: string;

  @Column({ name: 'films', type: 'simple-array' })
  private films: string[];

  @Column({ name: 'species', type: 'simple-array' })
  private species: string[];

  @Column({ name: 'starships', type: 'simple-array' })
  private starships: string[];

  @Column({ name: 'vehicles', type: 'simple-array' })
  private vehicles: string[];
}
