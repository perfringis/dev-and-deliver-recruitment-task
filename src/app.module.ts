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
import { FilmRepository } from './repository/FilmRepository';

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
  controllers: [FilmController],
  providers: [
    // repositories
    FilmRepository,
    // services
    FilmService,
  ],
})
export class AppModule {}
