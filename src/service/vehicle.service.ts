import { Injectable, NotFoundException } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { VehicleRepository } from '../repository/vehicle.repository';
import { VehicleDTO } from '../dto/vehicle.dto';
import { Vehicle } from '../entity/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  public async getVehicles(
    page: number,
    limit: number,
  ): Promise<PageDTO<VehicleDTO[]>> {
    const [data, total] = await this.vehicleRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getVehicle(id: string): Promise<VehicleDTO> {
    const vehicle: Vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      throw new NotFoundException(`Vehicle does not exist, id = ${id}`);
    }

    return this.toDTO(vehicle);
  }

  private toDTO(vehicle: Vehicle): VehicleDTO {
    return new VehicleDTO(vehicle);
  }

  private toDTOs(vehicles: Vehicle[]): VehicleDTO[] {
    return vehicles.map((vehicle) => this.toDTO(vehicle));
  }
}
