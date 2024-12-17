import { Injectable } from '@nestjs/common';
import { StarWasAPI } from '../api/swapi';
import { FilmRepository } from '../repository/FilmRepository';
import { PageDTO } from '../dto/page.dto';
import { FilmDTO } from '../dto/film.dto';
import { Film } from '../entity/film.entity';

@Injectable()
export class FilmService {
  constructor(
    private readonly starWasAPI: StarWasAPI,
    private readonly filmRepository: FilmRepository,
  ) {}

  public async getFilms(
    page: number,
    limit: number,
  ): Promise<PageDTO<FilmDTO[]>> {
    const [data, total] = await this.filmRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getFilm(id: string): Promise<FilmDTO> {
    const film: Film = await this.filmRepository.findById(id);

    return this.toDTO(film);
  }

  private toDTO(film: Film): FilmDTO {
    return new FilmDTO(film);
  }

  private toDTOs(films: Film[]): FilmDTO[] {
    return films.map((film) => this.toDTO(film));
  }
}
