export class SpeciesData {
  private id: string;
  private name: string;
  private classification: string;
  private designation: string;
  private averageHeight: string;
  private averageLifespan: string;
  private eyeColors: string;
  private hairColors: string;
  private skinColors: string;
  private language: string;
  private homeWorld: string;
  private people: string[];
  private films: string[];
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
