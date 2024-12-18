import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entity/film.entity';
import { Person } from './entity/person.entity';
import { Planet } from './entity/planet.entity';
import { Species } from './entity/species.entity';
import { Starship } from './entity/starship.entity';
import { Vehicle } from './entity/vehicle.entity';
import { FilmController } from './controller/film.controller';
import { FilmService } from './service/film.service';
import { FilmRepository } from './repository/film.repository';
import { PersonRepository } from './repository/person.repository';
import { PlanetRepository } from './repository/planet.repository';
import { SpeciesRepository } from './repository/species.repository';
import { StarshipRepository } from './repository/starship.repository';
import { VehicleRepository } from './repository/vehicle.repository';
import { PersonService } from './service/person.service';
import { PlanetService } from './service/planet.service';
import { SpeciesService } from './service/species.service';
import { StarshipService } from './service/starship.service';
import { VehicleService } from './service/vehicle.service';
import { PersonController } from './controller/person.controller';
import { PlanetController } from './controller/planet.controller';
import { SpeciesController } from './controller/species.controller';
import { StarshipController } from './controller/starship.controller';
import { VehicleController } from './controller/vehicle.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: process.env.DATABASE_PORT
        ? parseInt(process.env.DATABASE_PORT, 10)
        : 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      entities: [Film, Person, Planet, Species, Starship, Vehicle],
    }),
  ],
  controllers: [
    FilmController,
    PersonController,
    PlanetController,
    SpeciesController,
    StarshipController,
    VehicleController,
  ],
  providers: [
    // repositories
    FilmRepository,
    PersonRepository,
    PlanetRepository,
    SpeciesRepository,
    StarshipRepository,
    VehicleRepository,

    // services
    FilmService,
    PersonService,
    PlanetService,
    SpeciesService,
    StarshipService,
    VehicleService,
  ],
})
export class AppModule {}
