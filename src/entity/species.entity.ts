import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

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

  @Column({ name: 'skin_colors', type: 'varchar' })
  private skinColors: string;

  @Column({ name: 'language', type: 'varchar' })
  private language: string;

  @Column({ name: 'homeWorld', type: 'varchar' })
  private homeWorld: string;

  @Column({ name: 'people', type: 'simple-array' })
  private people: string[];

  @Column({ name: 'films', type: 'simple-array' })
  private films: string[];

  public getName(): string {
    return this.name;
  }

  public getClassification(): string {
    return this.classification;
  }

  public getDesignation(): string {
    return this.designation;
  }

  public getAverageHeight(): string {
    return this.averageHeight;
  }

  public getAverageLifespan(): string {
    return this.averageLifespan;
  }

  public getEyeColors(): string {
    return this.eyeColors;
  }

  public getHairColors(): string {
    return this.hairColors;
  }

  public getSkinColors(): string {
    return this.skinColors;
  }

  public getLanguage(): string {
    return this.language;
  }

  public getHomeWorld(): string {
    return this.homeWorld;
  }

  public getPeople(): string[] {
    return this.people;
  }

  public getFilms(): string[] {
    return this.films;
  }
}
