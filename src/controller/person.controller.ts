import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { PersonDTO } from '../dto/person.dto';
import { PersonService } from '../service/person.service';

@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('/people')
  public async getPeople(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<PersonDTO[]>> {
    return await this.personService.getPeople(page, limit);
  }

  @Get('/person/:id')
  public async getPerson(@Param('id') id: string): Promise<PersonDTO> {
    return await this.personService.getPerson(id);
  }
}
