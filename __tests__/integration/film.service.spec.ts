import { AppModule } from 'src/app.module';
import { Test } from '@nestjs/testing';
import { StarWarsAPI } from 'src/swapi/swapi';
import { PageDTO } from 'src/dto/page.dto';
import { NotFoundException } from '@nestjs/common';
import { FilmRepository } from 'src/film/film.repository';
import { Film } from 'src/film/film.entity';
import { FilmDTO } from 'src/film/film.dto';
import { FilmService } from 'src/film/film.service';

describe('FilmServiceTest', () => {
  let filmRepository: FilmRepository;
  let filmService: FilmService;
  let starWarsAPI: StarWarsAPI;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = await module.createNestApplication().init();

    filmRepository = app.get<FilmRepository>(FilmRepository);
    filmService = app.get<FilmService>(FilmService);
    starWarsAPI = app.get<StarWarsAPI>(StarWarsAPI);
  });

  afterEach(async () => {
    await deleteFilms();
  });

  test('getFilm - should query API for the first time when film is not cached', async () => {
    // given
    spyGetFilm();

    // when
    const dto: FilmDTO = await filmService.getFilm('1');

    // then
    expect(starWarsAPI.getFilm).toHaveBeenNthCalledWith(1, '1');
    expect((await getFilms()).length).toEqual(1);
    expect(dto).not.toBeNull();
    expect(dto.getTitle()).toEqual('A New Hope');
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/films/1');
  });

  test('getFilm - should return cached film when record is already saved in database', async () => {
    // given
    await createFilm();
    // and
    spyGetFilm();

    // when
    const dto: FilmDTO = await filmService.getFilm('1');

    // then
    expect(starWarsAPI.getFilm).not.toHaveBeenCalled();
    expect((await getFilms()).length).toEqual(1);
    expect(dto).not.toBeNull();
    expect(dto.getTitle()).toEqual('A New Hope');
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/films/1');
  });

  test('getFilm - should throw error when film is not found', async () => {
    // expect
    await expect(filmService.getFilm('999')).rejects.toThrow(NotFoundException);
  });

  test('getFilms - should cache requested films when database is empty', async () => {
    // given
    spyGetFilms();

    // when
    const data: PageDTO<FilmDTO[]> = await filmService.getFilms(1, 10);

    // then
    expect(starWarsAPI.getFilms).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(6);
    expect(data.data.length).toEqual(6);
  });

  test('getFilms - should return cached films when swapi was already called', async () => {
    // given
    spyGetFilms();

    // when
    let data: PageDTO<FilmDTO[]> = await filmService.getFilms(1, 10);

    // then
    expect(starWarsAPI.getFilms).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(6);
    expect(data.data.length).toEqual(6);

    // when
    data = await filmService.getFilms(1, 10);

    // then
    expect(starWarsAPI.getFilms).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(6);
    expect(data.data.length).toEqual(6);
  });

  test('getFilms - should omit one cached film and cache rest of them and return results', async () => {
    // given
    spyGetFilms();
    // and
    await createFilm();

    // when
    const data: PageDTO<FilmDTO[]> = await filmService.getFilms(1, 10);

    // then
    expect(starWarsAPI.getFilms).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(6);
    expect(data.data.length).toEqual(6);
  });

  const getFilms = async (): Promise<Film[]> => {
    return await filmRepository.find({});
  };

  const createFilm = async (): Promise<Film> => {
    const film: Film = new Film();
    film.setId('1');
    film.setTitle('A New Hope');
    film.setEpisodeId('4');
    film.setOpeningCrawl(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    film.setDirector('George Lucas');
    film.setProducer('Gary Kurtz, Rick McCallum');
    film.setReleaseDate('1977-05-25');
    film.setSpecies([]);
    film.setStarships([]);
    film.setVehicles([]);
    film.setCharacters([]);
    film.setPlanets([]);
    film.setUrl('https://www.swapi.tech/api/films/1');
    film.setCreatedAt('2024-12-18T15:42:35.839Z');
    film.setEditedAt('2024-12-18T15:42:35.839Z');

    return await filmRepository.save(film);
  };

  const deleteFilms = async (): Promise<void> => {
    await filmRepository.delete({});
  };

  const spyGetFilm = () => {
    jest.spyOn(starWarsAPI, 'getFilm');
  };

  const spyGetFilms = () => {
    jest.spyOn(starWarsAPI, 'getFilms');
  };
});
