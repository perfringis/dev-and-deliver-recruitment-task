export class PersonData {
  private id: string;
  private name: string;
  private birthYear: string;
  private eyeColor: string;
  private gender: string;
  private hairColor: string;
  private height: string;
  private mass: string;
  private skinColor: string;
  private homeWorld: string;
  private films: string[];
  private species: string[];
  private starships: string[];
  private vehicles: string[];
  private url: string;
  private createdAt: string;
  private editedAt: string;

  public getId(): string {
    return this.id;
  }

  public setId(value: string) {
    this.id = value;
  }

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

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string) {
    this.url = value;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public setCreatedAt(value: string) {
    this.createdAt = value;
  }

  public getEditedAt(): string {
    return this.editedAt;
  }

  public setEditedAt(value: string) {
    this.editedAt = value;
  }
}
