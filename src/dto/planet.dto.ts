export class PlanetDTO {
  private name: string;
  private diameter: string;
  private rotationPeriod: string;
  private orbitalPeriod: string;
  private gravity: string;
  private population: string;
  private climate: string;
  private terrain: string;
  private surfaceWater: string;
  private residents: string[];
  private films: string[];
  private url: string;

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

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }
}
