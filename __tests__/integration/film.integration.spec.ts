import { AppModule } from 'src/app.module';
import { Test } from '@nestjs/testing';
import { FilmService } from 'src/service/film.service';
import { StarWarsAPI } from 'src/api/swapi';
import { FilmData } from 'src/api/data/film.data';
import { FilmRepository } from 'src/repository/film.repository';
import { Film } from 'src/entity/film.entity';
import { FilmDTO } from 'src/dto/film.dto';
import * as dayjs from 'dayjs';

describe('film integration test', () => {
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
    await filmRepository.delete({});
  });

  test('should cache and return a film when a record is not present is database', async () => {
    // given
    jest.spyOn(starWarsAPI, 'getFilm').mockResolvedValue(_filmData('3'));

    // when
    const dto: FilmDTO = await filmService.getFilm('3');

    // then
    expect((await getFilms()).length).toEqual(1);

    expect(dto.getTitle()).toEqual('A New Hope');
    expect(dto.getEpisodeId()).toEqual('4');
    expect(dto.getOpeningCrawl()).toEqual(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    expect(dto.getDirector()).toEqual('George Lucas');
    expect(dto.getProducer()).toEqual('Gary Kurtz, Rick McCallum');
    expect(dto.getReleaseDate()).toEqual('1977-05-25');
    expect(dto.getSpecies().length).toEqual(5);
    expect(dto.getStarships().length).toEqual(8);
    expect(dto.getVehicles().length).toEqual(4);
    expect(dto.getCharacters().length).toEqual(18);
    expect(dto.getPlanets().length).toEqual(3);
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/films/1');
  });

  test('should return cached film when film is not expired and present in database', async () => {
    // given
    await createFilm('4', dayjs().toDate());

    // when
    const dto: FilmDTO = await filmService.getFilm('4');

    // then
    expect((await getFilms()).length).toEqual(1);

    expect(dto.getTitle()).toEqual('A New Hope');
    expect(dto.getEpisodeId()).toEqual('4');
    expect(dto.getOpeningCrawl()).toEqual(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    expect(dto.getDirector()).toEqual('George Lucas');
    expect(dto.getProducer()).toEqual('Gary Kurtz, Rick McCallum');
    expect(dto.getReleaseDate()).toEqual('1977-05-25');
    expect(dto.getSpecies().length).toEqual(5);
    expect(dto.getStarships().length).toEqual(8);
    expect(dto.getVehicles().length).toEqual(4);
    expect(dto.getCharacters().length).toEqual(18);
    expect(dto.getPlanets().length).toEqual(3);
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/films/1');
  });

  test('should return refreshed film when film is expired and present in database', async () => {
    // given
    const cachedAt = dayjs().subtract(25, 'hours').toDate();
    // and
    await createFilm('5', cachedAt);
    // and
    jest.spyOn(starWarsAPI, 'getFilm');

    // when
    const dto: FilmDTO = await filmService.getFilm('5');

    // then
    expect((await getFilms()).length).toEqual(1);
    expect(starWarsAPI.getFilm).toHaveBeenNthCalledWith(1, '5');

    // new cachedAt date
    expect(dayjs(dto.getCachedAt()).day).toEqual(dayjs().day);
    expect(dayjs(dto.getCachedAt()).month).toEqual(dayjs().month);
    expect(dayjs(dto.getCachedAt()).year).toEqual(dayjs().year);
  });

  const _species = (): string[] => {
    return [
      'https://www.swapi.tech/api/species/1',
      'https://www.swapi.tech/api/species/2',
      'https://www.swapi.tech/api/species/3',
      'https://www.swapi.tech/api/species/4',
      'https://www.swapi.tech/api/species/5',
    ];
  };

  const _starships = (): string[] => {
    return [
      'https://www.swapi.tech/api/starships/2',
      'https://www.swapi.tech/api/starships/3',
      'https://www.swapi.tech/api/starships/5',
      'https://www.swapi.tech/api/starships/9',
      'https://www.swapi.tech/api/starships/10',
      'https://www.swapi.tech/api/starships/11',
      'https://www.swapi.tech/api/starships/12',
      'https://www.swapi.tech/api/starships/13',
    ];
  };

  const _vehicles = (): string[] => {
    return [
      'https://www.swapi.tech/api/vehicles/4',
      'https://www.swapi.tech/api/vehicles/6',
      'https://www.swapi.tech/api/vehicles/7',
      'https://www.swapi.tech/api/vehicles/8',
    ];
  };

  const _characters = (): string[] => {
    return [
      'https://www.swapi.tech/api/people/1',
      'https://www.swapi.tech/api/people/2',
      'https://www.swapi.tech/api/people/3',
      'https://www.swapi.tech/api/people/4',
      'https://www.swapi.tech/api/people/5',
      'https://www.swapi.tech/api/people/6',
      'https://www.swapi.tech/api/people/7',
      'https://www.swapi.tech/api/people/8',
      'https://www.swapi.tech/api/people/9',
      'https://www.swapi.tech/api/people/10',
      'https://www.swapi.tech/api/people/12',
      'https://www.swapi.tech/api/people/13',
      'https://www.swapi.tech/api/people/14',
      'https://www.swapi.tech/api/people/15',
      'https://www.swapi.tech/api/people/16',
      'https://www.swapi.tech/api/people/18',
      'https://www.swapi.tech/api/people/19',
      'https://www.swapi.tech/api/people/81',
    ];
  };

  const _planets = (): string[] => {
    return [
      'https://www.swapi.tech/api/planets/1',
      'https://www.swapi.tech/api/planets/2',
      'https://www.swapi.tech/api/planets/3',
    ];
  };

  const _filmData = (id: string): FilmData => {
    const filmData: FilmData = new FilmData();

    filmData.setId(id);
    filmData.setTitle('A New Hope');
    filmData.setEpisodeId('4');
    filmData.setOpeningCrawl(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    filmData.setDirector('George Lucas');
    filmData.setProducer('Gary Kurtz, Rick McCallum');
    filmData.setReleaseDate('1977-05-25');
    filmData.setSpecies(_species());
    filmData.setStarships(_starships());
    filmData.setVehicles(_vehicles());
    filmData.setCharacters(_characters());
    filmData.setPlanets(_planets());
    filmData.setUrl('https://www.swapi.tech/api/films/1');
    filmData.setCreatedAt('2024-12-18T15:42:35.839Z');
    filmData.setEditedAt('2024-12-18T15:42:35.839Z');

    return filmData;
  };

  const _film = (id: string): Film => {
    const film: Film = new Film();

    film.setId(id);
    film.setTitle('A New Hope');
    film.setEpisodeId('4');
    film.setOpeningCrawl(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    film.setDirector('George Lucas');
    film.setProducer('Gary Kurtz, Rick McCallum');
    film.setReleaseDate('1977-05-25');
    film.setSpecies(_species());
    film.setStarships(_starships());
    film.setVehicles(_vehicles());
    film.setCharacters(_characters());
    film.setPlanets(_planets());
    film.setUrl('https://www.swapi.tech/api/films/1');
    film.setCreatedAt('2024-12-18T15:42:35.839Z');
    film.setEditedAt('2024-12-18T15:42:35.839Z');

    return film;
  };

  const createFilm = async (id: string, cacheAt: Date): Promise<Film> => {
    const film: Film = _film(id);
    film.setCachedAt(cacheAt);

    return await filmRepository.save(film);
  };

  const getFilms = async (): Promise<Film[]> => {
    return await filmRepository.find({});
  };
});
