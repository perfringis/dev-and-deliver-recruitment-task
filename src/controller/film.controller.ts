import { Controller, Get, Param } from '@nestjs/common';
import { FilmDTO } from '../dto/film.dto';

@Controller()
export class FilmController {
  @Get('/films')
  public async getFilms(): Promise<FilmDTO[]> {
    const films = [];
    films.push(new FilmDTO());

    return films;
  }

  @Get('/film/:id')
  public async getFilm(@Param('id') id: string): Promise<FilmDTO> {
    return new FilmDTO();
  }
}
