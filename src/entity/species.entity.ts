import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/BaseEntity';

@Entity({ name: 'species' })
export class Species extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  private name: string;

  @Column({ name: 'classification', type: 'varchar' })
  private classification: string;

  @Column({ name: 'designation', type: 'varchar' })
  private designation: string;

  @Column({ name: 'average_height', type: 'varchar' })
  private averageHeight: string;

  @Column({ name: 'average_lifespan', type: 'varchar' })
  private averageLifespan: string;

  @Column({ name: 'eye_colors', type: 'varchar' })
  private eyeColors: string;

  @Column({ name: 'hair_colors', type: 'varchar' })
  private hairColors: string;

  @Column({ name: 'skinColors', type: 'varchar' })
  private skin_colors: string;

  @Column({ name: 'language', type: 'varchar' })
  private language: string;

  @Column({ name: 'homeWorld', type: 'varchar' })
  private homeWorld: string;

  @Column({ name: 'people', type: 'simple-array' })
  private people: string[];

  @Column({ name: 'films', type: 'simple-array' })
  private films: string[];
}
