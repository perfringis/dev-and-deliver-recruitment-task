import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { PersonDTO } from '../dto/person.dto';
import { PersonService } from '../service/person.service';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('People')
@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('/people')
  @ApiOperation({ summary: 'Retrieve a paginated list of people' })
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
    description: 'Successfully retrieved list of people.',
    type: PageDTO<PersonDTO[]>,
  })
  public async getPeople(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<PersonDTO[]>> {
    return await this.personService.getPeople(page, limit);
  }

  @Get('/person/:id')
  @ApiOperation({ summary: 'Retrieve a person by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Person ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved person.',
    type: PersonDTO,
  })
  @ApiResponse({ status: 200, description: 'Person details', type: PersonDTO })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Person not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getPerson(@Param('id') id: string): Promise<PersonDTO> {
    return await this.personService.getPerson(id);
  }
}
