import { AppModule } from 'src/app.module';
import { Test } from '@nestjs/testing';
import { Film } from 'src/entity/film.entity';
import { FilmRepository } from 'src/repository/film.repository';
import * as dayjs from 'dayjs';

describe('film entity test', () => {
  let filmRepository: FilmRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = await module.createNestApplication().init();

    filmRepository = app.get<FilmRepository>(FilmRepository);
  });

  afterEach(async () => {
    await filmRepository.delete({});
  });

  test('should check expired film entity', async () => {
    // when
    const cachedAt = dayjs().subtract(25, 'hours').toDate();
    // and
    const film: Film = await createFilm('1', cachedAt);

    // then
    expect(film.expired()).toEqual(true);
  });

  test('should check not expired film entity', async () => {
    // when
    const cachedAt = dayjs().toDate();
    // and
    const film: Film = await createFilm('2', cachedAt);

    // then
    expect(film.expired()).toEqual(false);
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
});
