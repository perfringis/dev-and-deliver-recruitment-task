import { Injectable } from '@nestjs/common';
import { PersonRepository } from '../repository/person.repository';
import { PageDTO } from '../dto/page.dto';
import { Person } from '../entity/person.entity';
import { PersonDTO } from '../dto/person.dto';
import { PersonData } from 'src/api/data/person.data';
import { StarWarsAPI } from 'src/api/swapi';

@Injectable()
export class PersonService {
  constructor(
    private readonly personRepository: PersonRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getPeople(
    page: number,
    limit: number,
  ): Promise<PageDTO<PersonDTO[]>> {
    const [peopleDB, total] = await this.personRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (!total) {
      const peopleAPI = await this.starWarsAPI.getPeople(page, limit);

      const data = await Promise.all(
        peopleAPI.map(async (personAPI) => {
          return await this.getPerson(personAPI.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    if (total >= limit) {
      return new PageDTO(this.toDTOs(peopleDB), peopleDB.length, page, limit);
    }

    if (total < limit) {
      const peopleAPI = await this.starWarsAPI.getPeople(page, limit);

      const missingPeople = await this.removeRedundant(peopleAPI, peopleDB);

      const data = await Promise.all(
        missingPeople.map(async (person) => {
          return await this.getPerson(person.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }
  }

  public async getPerson(id: string): Promise<PersonDTO> {
    const person: Person = await this.personRepository.findById(id);

    if (!person) {
      const personData: PersonData = await this.starWarsAPI.getPerson(id);
      const created: Person = await this.personRepository.save(
        this.toPerson(personData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(person);
  }

  private toDTO(person: Person): PersonDTO {
    return new PersonDTO(person);
  }

  private toDTOs(people: Person[]): PersonDTO[] {
    return people.map((person) => this.toDTO(person));
  }

  private toPerson(personData: PersonData): Person {
    const person: Person = new Person();

    person.setId(personData.getId());
    person.setName(personData.getName());
    person.setBirthYear(personData.getBirthYear());
    person.setEyeColor(personData.getEyeColor());
    person.setGender(personData.getGender());
    person.setHairColor(personData.getHairColor());
    person.setHeight(personData.getHeight());
    person.setMass(personData.getMass());
    person.setSkinColor(personData.getSkinColor());
    person.setHomeWorld(personData.getHomeWorld());
    person.setUrl(personData.getUrl());
    person.setCreatedAt(personData.getCreatedAt());
    person.setEditedAt(personData.getEditedAt());

    return person;
  }

  private async removeRedundant(peopleAPI: PersonData[], peopleDB: Person[]) {
    return await Promise.all(
      peopleAPI.filter(
        async (personAPI) =>
          !peopleDB.some((personDB) => personDB.getId() === personAPI.getId()),
      ),
    );
  }
}
