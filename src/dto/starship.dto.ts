export class StarshipDTO {
  private name: string;
  private model: string;
  private starshipClass: string;
  private manufacturer: string;
  private costInCredits: string;
  private length: string;
  private crew: string;
  private passengers: string;
  private maxAtmospheringSpeed: string;
  private hyperDriveRating: string;
  private mglt: string;
  private cargoCapacity: string;
  private consumables: string;
  private films: string[];
  private pilots: string[];
  private url: string;

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

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }
}
