import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/database/base.entity';

@Entity({ name: 'planet' })
export class Planet extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  private name: string;

  @Column({ name: 'diameter', type: 'varchar' })
  private diameter: string;

  @Column({ name: 'rotation_period', type: 'varchar' })
  private rotationPeriod: string;

  @Column({ name: 'orbital_period', type: 'varchar' })
  private orbitalPeriod: string;

  @Column({ name: 'gravity', type: 'varchar' })
  private gravity: string;

  @Column({ name: 'population', type: 'varchar' })
  private population: string;

  @Column({ name: 'climate', type: 'varchar' })
  private climate: string;

  @Column({ name: 'terrain', type: 'varchar' })
  private terrain: string;

  @Column({ name: 'surface_water', type: 'varchar' })
  private surfaceWater: string;

  @Column({ name: 'residents', nullable: true, type: 'simple-array' })
  private residents: string[];

  @Column({ name: 'films', nullable: true, type: 'simple-array' })
  private films: string[];

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getDiameter(): string {
    return this.diameter;
  }

  public setDiameter(value: string) {
    this.diameter = value;
  }

  public getRotationPeriod(): string {
    return this.rotationPeriod;
  }

  public setRotationPeriod(value: string) {
    this.rotationPeriod = value;
  }

  public getOrbitalPeriod(): string {
    return this.orbitalPeriod;
  }

  public setOrbitalPeriod(value: string) {
    this.orbitalPeriod = value;
  }

  public getGravity(): string {
    return this.gravity;
  }

  public setGravity(value: string) {
    this.gravity = value;
  }

  public getPopulation(): string {
    return this.population;
  }

  public setPopulation(value: string) {
    this.population = value;
  }

  public getClimate(): string {
    return this.climate;
  }

  public setClimate(value: string) {
    this.climate = value;
  }

  public getTerrain(): string {
    return this.terrain;
  }

  public setTerrain(value: string) {
    this.terrain = value;
  }

  public getSurfaceWater(): string {
    return this.surfaceWater;
  }

  public setSurfaceWater(value: string) {
    this.surfaceWater = value;
  }

  public getResidents(): string[] {
    return this.residents;
  }

  public setResidents(value: string[]) {
    this.residents = value;
  }

  public getFilms(): string[] {
    return this.films;
  }

  public setFilms(value: string[]) {
    this.films = value;
  }
}
