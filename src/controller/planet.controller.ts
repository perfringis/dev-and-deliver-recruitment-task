import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { PlanetService } from '../service/planet.service';
import { PlanetDTO } from '../dto/planet.dto';

@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get('/planets')
  public async getPlanets(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<PlanetDTO[]>> {
    return await this.planetService.getPlanets(page, limit);
  }

  @Get('/planet/:id')
  public async getPlanet(@Param('id') id: string): Promise<PlanetDTO> {
    return await this.planetService.getPlanet(id);
  }
}
