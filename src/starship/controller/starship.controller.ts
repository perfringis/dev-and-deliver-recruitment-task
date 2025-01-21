import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StarshipDTO } from '../dto/starship.dto';
import { StarshipService } from '../service/starship.service';
import { PageDTO } from '../dto/page.dto';

@ApiTags('Starships')
@Controller()
export class StarshipController {
  constructor(private readonly starshipService: StarshipService) {}

  @Get('/starships')
  @ApiOperation({ summary: 'Retrieve a paginated list of starships' })
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
    description: 'Successfully retrieved list of starships.',
    type: PageDTO<StarshipDTO[]>,
  })
  public async getStarships(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<StarshipDTO[]>> {
    return await this.starshipService.getStarships(page, limit);
  }

  @Get('/starship/:id')
  @ApiOperation({ summary: 'Retrieve a starship by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'starship ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved starship.',
    type: StarshipDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'starship details',
    type: StarshipDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'starship not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getStarship(@Param('id') id: string): Promise<StarshipDTO> {
    return await this.starshipService.getStarship(id);
  }
}
