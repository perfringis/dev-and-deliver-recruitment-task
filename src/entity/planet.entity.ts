import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/BaseEntity';

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

  @Column({ name: 'residents', type: 'simple-array' })
  private residents: string[];

  @Column({ name: 'films', type: 'simple-array' })
  private films: string[];
}
