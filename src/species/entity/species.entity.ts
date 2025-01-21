import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/database/base.entity';

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

  @Column({ name: 'people', nullable: true, type: 'simple-array' })
  private people: string[];

  @Column({ name: 'films', nullable: true, type: 'simple-array' })
  private films: string[];

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getClassification(): string {
    return this.classification;
  }

  public setClassification(value: string) {
    this.classification = value;
  }

  public getDesignation(): string {
    return this.designation;
  }

  public setDesignation(value: string) {
    this.designation = value;
  }

  public getAverageHeight(): string {
    return this.averageHeight;
  }

  public setAverageHeight(value: string) {
    this.averageHeight = value;
  }

  public getAverageLifespan(): string {
    return this.averageLifespan;
  }

  public setAverageLifespan(value: string) {
    this.averageLifespan = value;
  }

  public getEyeColors(): string {
    return this.eyeColors;
  }

  public setEyeColors(value: string) {
    this.eyeColors = value;
  }

  public getHairColors(): string {
    return this.hairColors;
  }

  public setHairColors(value: string) {
    this.hairColors = value;
  }

  public getSkinColors(): string {
    return this.skinColors;
  }

  public setSkinColors(value: string) {
    this.skinColors = value;
  }

  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(value: string) {
    this.language = value;
  }

  public getHomeWorld(): string {
    return this.homeWorld;
  }

  public setHomeWorld(value: string) {
    this.homeWorld = value;
  }

  public getPeople(): string[] {
    return this.people;
  }

  public setPeople(value: string[]) {
    this.people = value;
  }

  public getFilms(): string[] {
    return this.films;
  }

  public setFilms(value: string[]) {
    this.films = value;
  }
}
