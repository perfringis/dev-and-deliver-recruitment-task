import { Film } from '../../src/entity/film.entity';
import { FilmRepository } from '../../src/repository/film.repository';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { PersonRepository } from '../../src/repository/person.repository';
import { Person } from '../../src/entity/person.entity';
import { CharacterService } from '../../src/service/character.service';

describe('CharacterServiceTest', () => {
  let filmRepository: FilmRepository;
  let personRepository: PersonRepository;
  let characterService: CharacterService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = await module.createNestApplication().init();

    filmRepository = app.get<FilmRepository>(FilmRepository);
    personRepository = app.get<PersonRepository>(PersonRepository);
    characterService = app.get<CharacterService>(CharacterService);
  });

  afterEach(async () => {
    await deleteFilms();
    await deletePeople();
  });

  test('should return none most frequent characters when films are missing in db', async () => {
    // given
    await createPerson();

    // when
    const result = await characterService.getMostFrequent();

    // then
    expect(result.count).toEqual(0);
    expect(result.characters).toEqual([]);
  });

  test('should return none most frequent characters when people are missing in db', async () => {
    // given
    await createFilm();

    // when
    const result = await characterService.getMostFrequent();

    // then
    expect(result.count).toEqual(0);
    expect(result.characters).toEqual([]);
  });

  test('should return most frequent character when name of the person is present in opening crawl', async () => {
    // given
    await createPerson();
    await createFilm();

    // when
    const result = await characterService.getMostFrequent();

    // then
    expect(result.count).toEqual(1);
    expect(result.characters).toEqual(['Luke Skywalker']);
  });

  const createFilm = async (): Promise<Film> => {
    const film: Film = new Film();
    film.setId('1');
    film.setTitle('A New Hope');
    film.setEpisodeId('4');
    film.setOpeningCrawl(
      'Luke Skywalker, a young farm boy from Tatooine, becomes a powerful Jedi Knight and saves the galaxy from the evil Empire.',
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

  const createPerson = async (): Promise<Person> => {
    const person: Person = new Person();

    person.setId('1');
    person.setName('Luke Skywalker');
    person.setBirthYear('19BBY');
    person.setEyeColor('blue');
    person.setGender('male');
    person.setHairColor('blond');
    person.setHeight('172');
    person.setMass('77');
    person.setSkinColor('fair');
    person.setHomeWorld('https://www.swapi.tech/api/planets/1');
    person.setFilms([]);
    person.setSpecies([]);
    person.setStarships([]);
    person.setVehicles([]);
    person.setUrl('https://www.swapi.tech/api/people/1');
    person.setCreatedAt('2024-12-19T16:20:32.598Z');
    person.setEditedAt('2024-12-19T16:20:32.598Z');

    return await personRepository.save(person);
  };

  const deletePeople = async (): Promise<void> => {
    await personRepository.delete({});
  };
});
