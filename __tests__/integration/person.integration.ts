import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { StarWarsAPI } from '../../src/api/swapi';
import { PersonRepository } from '../../src/repository/person.repository';
import { PersonService } from '../../src/service/person.service';
import { PersonDTO } from '../../src/dto/person.dto';
import { Person } from '../../src/entity/person.entity';
import { NotFoundException } from '@nestjs/common';
import { PageDTO } from '../../src/dto/page.dto';

describe('PersonServiceTest', () => {
  let personRepository: PersonRepository;
  let personService: PersonService;
  let starWarsAPI: StarWarsAPI;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = await module.createNestApplication().init();

    personRepository = app.get<PersonRepository>(PersonRepository);
    personService = app.get<PersonService>(PersonService);
    starWarsAPI = app.get<StarWarsAPI>(StarWarsAPI);
  });

  afterEach(async () => {
    await deletePeople();
  });

  test('getPerson - should query API for the first time when person is not cached', async () => {
    // given
    spyGetPerson();

    // when
    const dto: PersonDTO = await personService.getPerson('1');

    // then
    expect(starWarsAPI.getPerson).toHaveBeenNthCalledWith(1, '1');
    expect((await getPeople()).length).toEqual(1);
    expect(dto).not.toBeNull();
    expect(dto.getName()).toEqual('Luke Skywalker');
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/people/1');
  });

  test('getPerson - should return cached person when record is already saved in database', async () => {
    // given
    await createPerson();
    // and
    spyGetPerson();

    // when
    const dto: PersonDTO = await personService.getPerson('1');

    // then
    expect(starWarsAPI.getPerson).not.toHaveBeenCalled();
    expect((await getPeople()).length).toEqual(1);
    expect(dto).not.toBeNull();
    expect(dto.getName()).toEqual('Luke Skywalker');
    expect(dto.getUrl()).toEqual('https://www.swapi.tech/api/people/1');
  });

  test('getPerson - should throw error when person is not found', async () => {
    // expect
    await expect(personService.getPerson('999')).rejects.toThrow(
      NotFoundException,
    );
  });

  test('getPeople - should cache requested people when database is empty', async () => {
    // given
    spyGetPeople();

    // when
    const data: PageDTO<PersonDTO[]> = await personService.getPeople(1, 10);

    // then
    expect(starWarsAPI.getPeople).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(10);
    expect(data.data.length).toEqual(10);
  });

  test('getPeople - should return cached people when api was already called', async () => {
    // given
    spyGetPeople();

    // when
    let data: PageDTO<PersonDTO[]> = await personService.getPeople(1, 10);

    // then
    expect(starWarsAPI.getPeople).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(10);
    expect(data.data.length).toEqual(10);

    // when
    data = await personService.getPeople(1, 10);

    // then
    expect(starWarsAPI.getPeople).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(10);
    expect(data.data.length).toEqual(10);
  });

  test('getPeople - should omit one cached person and cache rest of them and return results', async () => {
    // given
    spyGetPeople();
    // and
    await createPerson();

    // when
    const data: PageDTO<PersonDTO[]> = await personService.getPeople(1, 10);

    // then
    expect(starWarsAPI.getPeople).toHaveBeenCalled();
    expect(data.page).toEqual(1);
    expect(data.size).toEqual(10);
    expect(data.total).toEqual(10);
    expect(data.data.length).toEqual(10);
  });

  const getPeople = async (): Promise<Person[]> => {
    return await personRepository.find({});
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

  const spyGetPerson = () => {
    jest.spyOn(starWarsAPI, 'getPerson');
  };

  const spyGetPeople = () => {
    jest.spyOn(starWarsAPI, 'getPeople');
  };
});
