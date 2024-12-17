import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

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

  @Column({ name: 'films', type: 'simple-array' })
  private films: string[];

  @Column({ name: 'pilots', type: 'simple-array' })
  private pilots: string[];

  public getName(): string {
    return this.name;
  }

  public getModel(): string {
    return this.model;
  }

  public getStarshipClass(): string {
    return this.starshipClass;
  }

  public getManufacturer(): string {
    return this.manufacturer;
  }

  public getCostInCredits(): string {
    return this.costInCredits;
  }

  public getLength(): string {
    return this.length;
  }

  public getCrew(): string {
    return this.crew;
  }

  public getPassengers(): string {
    return this.passengers;
  }

  public getMaxAtmospheringSpeed(): string {
    return this.maxAtmospheringSpeed;
  }

  public getHyperDriveRating(): string {
    return this.hyperDriveRating;
  }

  public getMglt(): string {
    return this.mglt;
  }

  public getCargoCapacity(): string {
    return this.cargoCapacity;
  }

  public getConsumables(): string {
    return this.consumables;
  }

  public getFilms(): string[] {
    return this.films;
  }

  public getPilots(): string[] {
    return this.pilots;
  }
}
