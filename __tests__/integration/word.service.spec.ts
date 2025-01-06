import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { WordService } from '../../src/service/word.service';
import { FilmRepository } from 'src/film/film.repository';
import { Film } from 'src/film/film.entity';

describe('WordServiceTest', () => {
  let filmRepository: FilmRepository;
  let wordService: WordService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = await module.createNestApplication().init();

    filmRepository = app.get<FilmRepository>(FilmRepository);
    wordService = app.get<WordService>(WordService);
  });

  afterEach(async () => {
    await deleteFilms();
  });

  test('should return empty object when film are not present in database', async () => {
    // when
    const result = await wordService.getOccurrences();
    // then
    expect(result).toEqual({});
  });

  test('should return object with words occurrences', async () => {
    // given
    await createFilm();

    // when
    const result = await wordService.getOccurrences();

    // then
    expect(result).toEqual({
      sample: 1,
      unique: 1,
      sentence: 1,
    });
  });

  const createFilm = async (): Promise<Film> => {
    const film: Film = new Film();
    film.setId('1');
    film.setTitle('A New Hope');
    film.setEpisodeId('4');
    film.setOpeningCrawl('Sample unique sentence');
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
});
