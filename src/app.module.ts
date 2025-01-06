import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmModule } from './film/film.module';
import { PersonModule } from './person/person.module';
import { PlanetModule } from './planet/planet.module';
import { SpeciesModule } from './species/species.module';
import { StarshipModule } from './starship/starship.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Film } from './film/film.entity';
import { Person } from './person/person.entity';
import { Planet } from './planet/planet.entity';
import { Species } from './species/species.entity';
import { Starship } from './starship/starship.entity';
import { Vehicle } from './vehicle/vehicle.entity';
import { WordModule } from './word/word.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
      entities: [Film, Person, Planet, Species, Starship, Vehicle],
    }),
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
