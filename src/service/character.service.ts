import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../repository/film.repository';
import { PersonRepository } from '../repository/person.repository';
import { MostFrequentCharactersDTO } from '../dto/most.frequent.characters.dto';

@Injectable()
export class CharacterService {
  constructor(
    private readonly filmRepository: FilmRepository,
    private readonly personRepository: PersonRepository,
  ) {}

  public async getMostFrequent(): Promise<MostFrequentCharactersDTO> {
    const [films, people] = await Promise.all([
      this.filmRepository.find({}),
      this.personRepository.find({}),
    ]);

    if (!films.length || !people.length) {
      return new MostFrequentCharactersDTO([], 0);
    }

    const openingCrawlText = films
      .map((film) => film.getOpeningCrawl().replace(/\s+/g, ' '))
      .join(' ');

    const characterCounts: Record<string, number> = people.reduce(
      (counts, person) => {
        const name = person.getName();
        const occurrences = (
          openingCrawlText.match(new RegExp(`${name}`, 'g')) || []
        ).length;

        if (occurrences > 0) {
          counts[name] = occurrences;
        }
        return counts;
      },
      {},
    );

    const maxCount = Math.max(0, ...Object.values(characterCounts));

    const mostFrequentCharacters = Object.entries(characterCounts)
      .filter(([_, count]) => count === maxCount)
      .map(([name]) => name);

    return new MostFrequentCharactersDTO(mostFrequentCharacters, maxCount);
  }
}
