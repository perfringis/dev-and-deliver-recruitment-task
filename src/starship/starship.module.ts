import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { StarshipController } from './starship.controller';
import { StarshipRepository } from './starship.repository';
import { StarshipService } from './starship.service';

@Module({
  imports: [],
  controllers: [StarshipController],
  providers: [StarshipRepository, StarshipService, StarWarsAPI],
  exports: [StarshipRepository],
})
export class StarshipModule {}
