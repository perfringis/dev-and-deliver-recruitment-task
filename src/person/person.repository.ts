import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Person } from 'src/person/person.entity';
@Injectable()
export class PersonRepository extends Repository<Person> {
  constructor(private dataSource: DataSource) {
    super(Person, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Person> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
