import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { SpeciesController } from './controller/species.controller';
import { SpeciesService } from './service/species.service';
import { SpeciesRepository } from './repository/species.repository';

@Module({
  imports: [],
  controllers: [SpeciesController],
  providers: [SpeciesRepository, SpeciesService, StarWarsAPI],
  exports: [SpeciesRepository],
})
export class SpeciesModule {}
