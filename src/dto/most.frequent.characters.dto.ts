export class MostFrequentCharactersDTO {
  mostFrequentCharacters: string[];
  count: number;

  constructor(mostFrequentCharacters: string[], count: number) {
    this.mostFrequentCharacters = mostFrequentCharacters;
    this.count = count;
  }
}
