import { Injectable } from '@nestjs/common';
import { FilmRepository } from 'src/film/film.repository';

@Injectable()
export class WordService {
  constructor(private readonly filmRepository: FilmRepository) {}

  public async getOccurrences(): Promise<Record<string, number>> {
    const films = await this.filmRepository.find({});

    return films.reduce(
      (wordCount, film) => {
        film
          .getOpeningCrawl()
          .toLowerCase()
          .match(/\b\w+\b/g)
          ?.forEach((word) => {
            wordCount[word] = (wordCount[word] || 0) + 1;
          });

        return wordCount;
      },
      {} as Record<string, number>,
    );
  }
}
