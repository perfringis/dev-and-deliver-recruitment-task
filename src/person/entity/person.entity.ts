import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/database/base.entity';

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

  @Column({ name: 'films', nullable: true, type: 'simple-array' })
  private films: string[];

  @Column({ name: 'species', nullable: true, type: 'simple-array' })
  private species: string[];

  @Column({ name: 'starships', nullable: true, type: 'simple-array' })
  private starships: string[];

  @Column({ name: 'vehicles', nullable: true, type: 'simple-array' })
  private vehicles: string[];

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getBirthYear(): string {
    return this.birthYear;
  }

  public setBirthYear(value: string) {
    this.birthYear = value;
  }

  public getEyeColor(): string {
    return this.eyeColor;
  }

  public setEyeColor(value: string) {
    this.eyeColor = value;
  }

  public getGender(): string {
    return this.gender;
  }

  public setGender(value: string) {
    this.gender = value;
  }

  public getHairColor(): string {
    return this.hairColor;
  }

  public setHairColor(value: string) {
    this.hairColor = value;
  }

  public getHeight(): string {
    return this.height;
  }

  public setHeight(value: string) {
    this.height = value;
  }

  public getMass(): string {
    return this.mass;
  }

  public setMass(value: string) {
    this.mass = value;
  }

  public getSkinColor(): string {
    return this.skinColor;
  }

  public setSkinColor(value: string) {
    this.skinColor = value;
  }

  public getHomeWorld(): string {
    return this.homeWorld;
  }

  public setHomeWorld(value: string) {
    this.homeWorld = value;
  }

  public getFilms(): string[] {
    return this.films;
  }

  public setFilms(value: string[]) {
    this.films = value;
  }

  public getSpecies(): string[] {
    return this.species;
  }

  public setSpecies(value: string[]) {
    this.species = value;
  }

  public getStarships(): string[] {
    return this.starships;
  }

  public setStarships(value: string[]) {
    this.starships = value;
  }

  public getVehicles(): string[] {
    return this.vehicles;
  }

  public setVehicles(value: string[]) {
    this.vehicles = value;
  }
}
