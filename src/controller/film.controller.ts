import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmService } from '../service/film.service';
import { PageDTO } from '../dto/page.dto';
import { FilmDTO } from '../dto/film.dto';

@Controller()
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/films')
  public async getFilms(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<FilmDTO[]>> {
    return await this.filmService.getFilms(page, limit);
  }

  @Get('/film/:id')
  public async getFilm(@Param('id') id: string): Promise<FilmDTO> {
    return await this.filmService.getFilm(id);
  }
}
