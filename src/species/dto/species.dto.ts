import { Species } from "../entity/species.entity";

export class SpeciesDTO {
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

  constructor(species: Species) {
    this.name = species.getName();
    this.classification = species.getClassification();
    this.designation = species.getDesignation();
    this.averageHeight = species.getAverageHeight();
    this.averageLifespan = species.getAverageLifespan();
    this.eyeColors = species.getEyeColors();
    this.hairColors = species.getHairColors();
    this.skinColors = species.getSkinColors();
    this.language = species.getLanguage();
    this.homeWorld = species.getHomeWorld();
    this.people = species.getPeople();
    this.films = species.getFilms();
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
}
