import { Vehicle } from 'src/vehicle/entity/vehicle.entity';

export class VehicleDTO {
  private name: string;
  private model: string;
  private vehicleClass: string;
  private manufacturer: string;
  private length: string;
  private costInCredits: string;
  private crew: string;
  private passengers: string;
  private maxAtmospheringSpeed: string;
  private cargoCapacity: string;
  private consumables: string;
  private films: string[];
  private pilots: string[];
  private url: string;

  constructor(vehicle: Vehicle) {
    this.name = vehicle.getName();
    this.model = vehicle.getModel();
    this.vehicleClass = vehicle.getVehicleClass();
    this.manufacturer = vehicle.getManufacturer();
    this.length = vehicle.getLength();
    this.costInCredits = vehicle.getCostInCredits();
    this.crew = vehicle.getCrew();
    this.passengers = vehicle.getPassengers();
    this.maxAtmospheringSpeed = vehicle.getMaxAtmospheringSpeed();
    this.cargoCapacity = vehicle.getCargoCapacity();
    this.consumables = vehicle.getConsumables();
    this.films = vehicle.getFilms();
    this.pilots = vehicle.getPilots();
    this.url = vehicle.getUrl();
  }

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

  public getVehicleClass(): string {
    return this.vehicleClass;
  }

  public setVehicleClass(value: string) {
    this.vehicleClass = value;
  }

  public getManufacturer(): string {
    return this.manufacturer;
  }

  public setManufacturer(value: string) {
    this.manufacturer = value;
  }

  public getLength(): string {
    return this.length;
  }

  public setLength(value: string) {
    this.length = value;
  }

  public getCostInCredits(): string {
    return this.costInCredits;
  }

  public setCostInCredits(value: string) {
    this.costInCredits = value;
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

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }
}
