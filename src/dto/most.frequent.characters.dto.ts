export class MostFrequentCharactersDTO {
  public characters: string[];
  public count: number;

  constructor(characters: string[], count: number) {
    this.characters = characters;
    this.count = count;
  }
}
