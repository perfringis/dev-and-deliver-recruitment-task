import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { PersonRepository } from './repository/person.repository';
import { PersonService } from './service/person.service';
import { PersonController } from './controller/person.controller';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PersonRepository, PersonService, StarWarsAPI],
  exports: [PersonRepository],
})
export class PersonModule {}
