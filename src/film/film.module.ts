import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { FilmRepository } from './repository/film.repository';
import { FilmController } from './controller/film.controller';
import { FilmService } from './service/film.service';

@Module({
  imports: [],
  controllers: [FilmController],
  providers: [FilmRepository, FilmService, StarWarsAPI],
  exports: [FilmRepository],
})
export class FilmModule {}
