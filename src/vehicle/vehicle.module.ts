import { Module } from '@nestjs/common';
import { StarWarsAPI } from 'src/swapi/swapi';
import { VehicleController } from './controller/vehicle.controller';
import { VehicleRepository } from './repository/vehicle.repository';
import { VehicleService } from './service/vehicle.service';

@Module({
  imports: [],
  controllers: [VehicleController],
  providers: [VehicleRepository, VehicleService, StarWarsAPI],
  exports: [VehicleRepository],
})
export class VehicleModule {}
