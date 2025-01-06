import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { PersonController } from './person.controller';
import { PersonRepository } from './person.repository';
import { PersonService } from './person.service';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [PersonRepository, PersonService, StarWarsAPI],
  exports: [PersonRepository],
})
export class PersonModule {}
