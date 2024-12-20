import { WordService } from '../service/word.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get('/words/occurrences')
  public async getWordOccurrences(): Promise<Record<string, number>> {
    return await this.wordService.getOccurrences();
  }
}
