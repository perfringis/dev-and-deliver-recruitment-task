import { Controller, Get, Param } from '@nestjs/common';
import { FilmDTO } from '../dto/film.dto';
import { FilmService } from '../service/film.service';

@Controller()
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/films')
  public async getFilms(): Promise<FilmDTO[]> {
    return await this.filmService.getFilms();
  }

  @Get('/film/:id')
  public async getFilm(@Param('id') id: string): Promise<FilmDTO> {
    return await this.filmService.getFilm(id);
  }
}
