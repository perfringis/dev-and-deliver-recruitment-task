import { Module } from '@nestjs/common';
import { FilmModule } from 'src/film/film.module';
import { PersonModule } from 'src/person/person.module';
import { CharacterController } from './controller/character.controller';
import { CharacterService } from './service/character.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from '../film/entity/film.entity';
import { Person } from '../person/entity/person.entity';

@Module({
  imports: [FilmModule, PersonModule, TypeOrmModule.forFeature([Film, Person])],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports: [],
})
export class CharacterModule {}
