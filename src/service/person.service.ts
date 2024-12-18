import { Injectable, NotFoundException } from '@nestjs/common';
import { PersonRepository } from '../repository/person.repository';
import { PageDTO } from '../dto/page.dto';
import { Person } from '../entity/person.entity';
import { PersonDTO } from '../dto/person.dto';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  public async getPeople(
    page: number,
    limit: number,
  ): Promise<PageDTO<PersonDTO[]>> {
    const [data, total] = await this.personRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getPerson(id: string): Promise<PersonDTO> {
    const person: Person = await this.personRepository.findById(id);

    if (!person) {
      throw new NotFoundException(`Person does not exist, id = ${id}`);
    }

    return this.toDTO(person);
  }

  private toDTO(person: Person): PersonDTO {
    return new PersonDTO(person);
  }

  private toDTOs(people: Person[]): PersonDTO[] {
    return people.map((person) => this.toDTO(person));
  }
}
