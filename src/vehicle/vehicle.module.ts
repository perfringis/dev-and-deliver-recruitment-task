import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/api/swapi';
import { VehicleController } from './vehicle.controller';
import { VehicleRepository } from './vehicle.repository';
import { VehicleService } from './vehicle.service';

@Module({
  imports: [],
  controllers: [VehicleController],
  providers: [VehicleRepository, VehicleService, StarWarsAPI],
  exports: [VehicleRepository],
})
export class VehicleModule {}
