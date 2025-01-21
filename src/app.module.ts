import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilmModule } from './film/film.module';
import { PersonModule } from './person/person.module';
import { PlanetModule } from './planet/planet.module';
import { SpeciesModule } from './species/species.module';
import { StarshipModule } from './starship/starship.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { WordModule } from './word/word.module';
import { CharacterModule } from './character/character.module';
import { DbModule } from './database/db.module';
import { validate } from './config/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({ validate }),
    DbModule,
    FilmModule,
    PersonModule,
    PlanetModule,
    SpeciesModule,
    StarshipModule,
    VehicleModule,
    WordModule,
    CharacterModule,
  ],
})
export class AppModule {}
