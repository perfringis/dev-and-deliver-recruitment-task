import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity({ name: 'starship' })
export class Starship extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  private name: string;

  @Column({ name: 'model', type: 'varchar' })
  private model: string;

  @Column({ name: 'starship_class', type: 'varchar' })
  private starshipClass: string;

  @Column({ name: 'manufacturer', type: 'varchar' })
  private manufacturer: string;

  @Column({ name: 'cost_in_credits', type: 'varchar' })
  private costInCredits: string;

  @Column({ name: 'length', type: 'varchar' })
  private length: string;

  @Column({ name: 'crew', type: 'varchar' })
  private crew: string;

  @Column({ name: 'passengers', type: 'varchar' })
  private passengers: string;

  @Column({ name: 'max_atmosphering_speed', type: 'varchar' })
  private maxAtmospheringSpeed: string;

  @Column({ name: 'hyper_drive_rating', type: 'varchar' })
  private hyperDriveRating: string;

  @Column({ name: 'mglt', type: 'varchar' })
  private mglt: string;

  @Column({ name: 'cargo_capacity', type: 'varchar' })
  private cargoCapacity: string;

  @Column({ name: 'consumables', type: 'varchar' })
  private consumables: string;

  @Column({ name: 'films', nullable: true, type: 'simple-array' })
  private films: string[];

  @Column({ name: 'pilots', nullable: true, type: 'simple-array' })
  private pilots: string[];

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }

  public getStarshipClass(): string {
    return this.starshipClass;
  }

  public setStarshipClass(value: string) {
    this.starshipClass = value;
  }

  public getManufacturer(): string {
    return this.manufacturer;
  }

  public setManufacturer(value: string) {
    this.manufacturer = value;
  }

  public getCostInCredits(): string {
    return this.costInCredits;
  }

  public setCostInCredits(value: string) {
    this.costInCredits = value;
  }

  public getLength(): string {
    return this.length;
  }

  public setLength(value: string) {
    this.length = value;
  }

  public getCrew(): string {
    return this.crew;
  }

  public setCrew(value: string) {
    this.crew = value;
  }

  public getPassengers(): string {
    return this.passengers;
  }

  public setPassengers(value: string) {
    this.passengers = value;
  }

  public getMaxAtmospheringSpeed(): string {
    return this.maxAtmospheringSpeed;
  }

  public setMaxAtmospheringSpeed(value: string) {
    this.maxAtmospheringSpeed = value;
  }

  public getHyperDriveRating(): string {
    return this.hyperDriveRating;
  }

  public setHyperDriveRating(value: string) {
    this.hyperDriveRating = value;
  }

  public getMglt(): string {
    return this.mglt;
  }

  public setMglt(value: string) {
    this.mglt = value;
  }

  public getCargoCapacity(): string {
    return this.cargoCapacity;
  }

  public setCargoCapacity(value: string) {
    this.cargoCapacity = value;
  }

  public getConsumables(): string {
    return this.consumables;
  }

  public setConsumables(value: string) {
    this.consumables = value;
  }

  public getFilms(): string[] {
    return this.films;
  }

  public setFilms(value: string[]) {
    this.films = value;
  }

  public getPilots(): string[] {
    return this.pilots;
  }

  public setPilots(value: string[]) {
    this.pilots = value;
  }
}
