import { CharacterService } from '../service/character.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('/characters/frequent')
  public async getMostFrequent() {
    return await this.characterService.getMostFrequent();
  }
}
