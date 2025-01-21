import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { PlanetController } from './controller/planet.controller';
import { PlanetRepository } from './repository/planet.repository';
import { PlanetService } from './service/planet.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetRepository, PlanetService, StarWarsAPI],
  exports: [PlanetRepository],
})
export class PlanetModule {}
