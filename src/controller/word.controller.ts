import { WordService } from '../service/word.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Words')
@Controller()
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get('/words/occurrences')
  @ApiOperation({
    summary: 'Get the occurrences of words in the opening crawls of films',
    description:
      'Fetches the word count from the opening crawls of all films stored in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'A record of word occurrences, where keys are words and values are their respective counts.',
    type: Object,
  })
  public async getWordOccurrences(): Promise<Record<string, number>> {
    return await this.wordService.getOccurrences();
  }
}
