import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MostFrequentCharactersDTO } from './most.frequent.characters.dto';
import { CharacterService } from './character.service';

@ApiTags('Characters')
@Controller()
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('/characters/frequent')
  @ApiOperation({
    summary: 'Get the most frequent characters in the opening crawls of films',
    description:
      'Returns the most frequent characters mentioned in the opening crawls of the films.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns a list of the most frequent characters and their count.',
    type: MostFrequentCharactersDTO,
  })
  public async getMostFrequent(): Promise<MostFrequentCharactersDTO> {
    return await this.characterService.getMostFrequent();
  }
}
