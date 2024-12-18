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
    private readonly starWasAPI: StarWarsAPI,
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

    if (!film) {
      const filmData: FilmData = await this.starWasAPI.getFilm(id);
      const created: Film = await this.filmRepository.save(
        this.toFilm(filmData),
      );

      return this.toDTO(created);
    }

    if (film && film.expired()) {
      await this.filmRepository.remove(film);

      const filmData: FilmData = await this.starWasAPI.getFilm(id);
      const updated: Film = await this.filmRepository.save(
        this.toFilm(filmData),
      );

      return this.toDTO(updated);
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
