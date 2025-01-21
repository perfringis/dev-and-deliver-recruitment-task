import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FilmDTO } from '../dto/film.dto';
import { FilmService } from '../service/film.service';
import { PageDTO } from '../dto/page.dto';

@ApiTags('Films')
@Controller()
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/films')
  @ApiOperation({ summary: 'Retrieve a paginated list of films' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number, default is 1',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit per page, default is 10',
  })
  @ApiResponse({
    status: 200,
    description: 'List of films',
    type: PageDTO<FilmDTO[]>,
  })
  public async getFilms(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<FilmDTO[]>> {
    return await this.filmService.getFilms(page, limit);
  }

  @Get('/film/:id')
  @ApiOperation({ summary: 'Retrieve a film by its ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Film ID',
  })
  @ApiResponse({ status: 200, description: 'Film details', type: FilmDTO })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Film not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getFilm(@Param('id') id: string): Promise<FilmDTO> {
    return await this.filmService.getFilm(id);
  }
}
