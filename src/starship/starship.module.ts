import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { StarshipController } from './controller/starship.controller';
import { StarshipRepository } from './repository/starship.repository';
import { StarshipService } from './service/starship.service';

@Module({
  imports: [],
  controllers: [StarshipController],
  providers: [StarshipRepository, StarshipService, StarWarsAPI],
  exports: [StarshipRepository],
})
export class StarshipModule {}
