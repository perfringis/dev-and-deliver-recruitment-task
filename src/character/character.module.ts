import { Module } from '@nestjs/common';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { FilmModule } from 'src/film/film.module';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [FilmModule, PersonModule],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports: [],
})
export class CharacterModule {}
