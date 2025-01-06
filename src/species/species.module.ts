import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { SpeciesRepository } from './species.repository';

@Module({
  imports: [],
  controllers: [SpeciesController],
  providers: [SpeciesRepository, SpeciesService, StarWarsAPI],
  exports: [SpeciesRepository],
})
export class SpeciesModule {}
