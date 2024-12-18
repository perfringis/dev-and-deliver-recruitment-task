import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { StarshipService } from '../service/starship.service';
import { StarshipDTO } from '../dto/starship.dto';

@Controller()
export class StarshipController {
  constructor(private readonly starshipService: StarshipService) {}

  @Get('/starships')
  public async getStarships(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<StarshipDTO[]>> {
    return await this.starshipService.getStarships(page, limit);
  }

  @Get('/starship/:id')
  public async getStarship(@Param('id') id: string): Promise<StarshipDTO> {
    return await this.starshipService.getStarship(id);
  }
}
