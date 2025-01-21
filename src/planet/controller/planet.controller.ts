import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PlanetDTO } from '../dto/planet.dto';
import { PlanetService } from '../service/planet.service';
import { PageDTO } from '../dto/page.dto';

@ApiTags('Planets')
@Controller()
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get('/planets')
  @ApiOperation({ summary: 'Retrieve a paginated list of planets' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of records per page',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved list of planets.',
    type: PageDTO<PlanetDTO[]>,
  })
  public async getPlanets(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<PlanetDTO[]>> {
    return await this.planetService.getPlanets(page, limit);
  }

  @Get('/planet/:id')
  @ApiOperation({ summary: 'Retrieve a planet by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Planet ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved planet.',
    type: PlanetDTO,
  })
  @ApiResponse({ status: 200, description: 'Planet details', type: PlanetDTO })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Planet not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getPlanet(@Param('id') id: string): Promise<PlanetDTO> {
    return await this.planetService.getPlanet(id);
  }
}
