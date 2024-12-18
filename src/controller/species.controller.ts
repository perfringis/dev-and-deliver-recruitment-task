import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { SpeciesService } from '../service/species.service';
import { SpeciesDTO } from '../dto/species.dto';

@Controller()
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get('/species')
  public async getSpecies(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<SpeciesDTO[]>> {
    return await this.speciesService.getSpecies(page, limit);
  }

  @Get('/kind/:id')
  public async getKind(@Param('id') id: string): Promise<SpeciesDTO> {
    return await this.speciesService.getKind(id);
  }
}
