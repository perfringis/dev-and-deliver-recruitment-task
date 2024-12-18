import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { VehicleService } from '../service/vehicle.service';
import { VehicleDTO } from '../dto/vehicle.dto';

@Controller()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('/vehicles')
  public async getVehicles(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<VehicleDTO[]>> {
    return await this.vehicleService.getVehicles(page, limit);
  }

  @Get('/vehicle/:id')
  public async getStarship(@Param('id') id: string): Promise<VehicleDTO> {
    return await this.vehicleService.getVehicle(id);
  }
}
