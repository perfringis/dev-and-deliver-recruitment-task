import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { PlanetController } from './planet.controller';
import { PlanetRepository } from './planet.repository';
import { PlanetService } from './planet.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetRepository, PlanetService, StarWarsAPI],
  exports: [PlanetRepository],
})
export class PlanetModule {}
