import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { FilmController } from './film.controller';
import { FilmRepository } from './film.repository';
import { FilmService } from './film.service';

@Module({
  imports: [],
  controllers: [FilmController],
  providers: [FilmRepository, FilmService, StarWarsAPI],
  exports: [FilmRepository],
})
export class FilmModule {}
