import { AppModule } from 'src/app.module';
import { Test } from '@nestjs/testing';
import { FilmService } from 'src/service/film.service';
import { StarWarsAPI } from 'src/api/swapi';
import { FilmData } from 'src/api/data/film.data';
import { FilmRepository } from 'src/repository/film.repository';
import { Film } from 'src/entity/film.entity';
import { FilmDTO } from 'src/dto/film.dto';

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

  test('should cache and return a film when a record is not present is database', async () => {
    // given
    await expect((await getFilms()).length).toEqual(0);
    // and
    jest.spyOn(starWarsAPI, 'getFilm').mockResolvedValue(_filmData());

    // when
    const film: FilmDTO = await filmService.getFilm('1');

    // then
    await expect((await getFilms()).length).toEqual(1);

    expect(film.getTitle()).toEqual('A New Hope');
    expect(film.getEpisodeId()).toEqual('4');
    expect(film.getOpeningCrawl()).toEqual(
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    );
    expect(film.getDirector()).toEqual('George Lucas');
    expect(film.getProducer()).toEqual('Gary Kurtz, Rick McCallum');
    expect(film.getReleaseDate()).toEqual('1977-05-25');
    expect(film.getSpecies().length).toEqual(5);
    expect(film.getStarships().length).toEqual(8);
    expect(film.getVehicles().length).toEqual(4);
    expect(film.getCharacters().length).toEqual(18);
    expect(film.getPlanets().length).toEqual(3);
    expect(film.getUrl()).toEqual('https://www.swapi.tech/api/films/1');
  });
  test('should return cached film when film is not expired and present in database', async () => {});
  test('should return refreshed film when film is expired and present in database', async () => {});

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

  const _filmData = (): FilmData => {
    const filmData: FilmData = new FilmData();

    filmData.setId('1');
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

  const getFilms = async (): Promise<Film[]> => {
    return await filmRepository.find({});
  };
});
