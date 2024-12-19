import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../repository/film.repository';
import { Film } from '../entity/film.entity';
import { FilmDTO } from '../dto/film.dto';
import { PageDTO } from '../dto/page.dto';
import { StarWarsAPI } from '../api/swapi';
import { FilmData } from 'src/api/data/film.data';

@Injectable()
export class FilmService {
  constructor(
    private readonly filmRepository: FilmRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getFilms(
    page: number,
    limit: number,
  ): Promise<PageDTO<FilmDTO[]>> {
    const [data, total] = await this.filmRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (total === 0) {
      const films = await this.starWarsAPI.getFilms(page, limit);

      const data = await Promise.all(
        films.map(async (film) => {
          return await this.getFilm(film.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    } else if (total > 0 && total < limit) {
      const films = await this.starWarsAPI.getFilms(page, limit);

      const data = await Promise.all(
        films.map(async (film) => {
          return await this.getFilm(film.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getFilm(id: string): Promise<FilmDTO> {
    const film: Film = await this.filmRepository.findById(id);

    if (!film) {
      const filmData: FilmData = await this.starWarsAPI.getFilm(id);
      const created: Film = await this.filmRepository.save(
        this.toFilm(filmData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(film);
  }

  private toDTO(film: Film): FilmDTO {
    return new FilmDTO(film);
  }

  private toDTOs(films: Film[]): FilmDTO[] {
    return films.map((film) => this.toDTO(film));
  }

  private toFilm(filmData: FilmData): Film {
    const film: Film = new Film();

    film.setId(filmData.getId());
    film.setTitle(filmData.getTitle());
    film.setEpisodeId(filmData.getEpisodeId());
    film.setOpeningCrawl(filmData.getOpeningCrawl());
    film.setDirector(filmData.getDirector());
    film.setProducer(filmData.getProducer());
    film.setReleaseDate(filmData.getReleaseDate());
    film.setSpecies(filmData.getSpecies());
    film.setStarships(filmData.getStarships());
    film.setVehicles(filmData.getVehicles());
    film.setCharacters(filmData.getCharacters());
    film.setPlanets(filmData.getPlanets());
    film.setUrl(filmData.getUrl());
    film.setCreatedAt(filmData.getCreatedAt());
    film.setEditedAt(filmData.getEditedAt());

    return film;
  }
}
