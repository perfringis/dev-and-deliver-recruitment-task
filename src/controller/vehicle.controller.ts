import { Controller, Get, Param, Query } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { VehicleService } from '../service/vehicle.service';
import { VehicleDTO } from '../dto/vehicle.dto';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Vehicles')
@Controller()
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('/vehicles')
  @ApiOperation({ summary: 'Retrieve a paginated list of vehicles' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of records per page',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved list of vehicles.',
    type: PageDTO<VehicleDTO[]>,
  })
  public async getVehicles(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<PageDTO<VehicleDTO[]>> {
    return await this.vehicleService.getVehicles(page, limit);
  }

  @Get('/vehicle/:id')
  @ApiOperation({ summary: 'Retrieve a vehicle by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'vehicle ID',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved vehicle.',
    type: VehicleDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'vehicle details',
    type: VehicleDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'vehicle not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getVehicle(@Param('id') id: string): Promise<VehicleDTO> {
    return await this.vehicleService.getVehicle(id);
  }
}
