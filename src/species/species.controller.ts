import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SpeciesDTO } from './species.dto';
import { SpeciesService } from './species.service';

@ApiTags('Species')
@Controller()
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get('/species')
  @ApiOperation({ summary: 'Retrieve a paginated list of species' })
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
    description: 'Successfully retrieved list of species.',
    type: PageDTO<SpeciesDTO[]>,
  })
  public async getSpecies(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<SpeciesDTO[]>> {
    return await this.speciesService.getSpecies(page, limit);
  }

  @Get('/kind/:id')
  @ApiOperation({ summary: 'Retrieve a kind by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'kind ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved kind.',
    type: SpeciesDTO,
  })
  @ApiResponse({ status: 200, description: 'Kind details', type: SpeciesDTO })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Kind not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getKind(@Param('id') id: string): Promise<SpeciesDTO> {
    return await this.speciesService.getKind(id);
  }
}
