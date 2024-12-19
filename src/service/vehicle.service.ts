import { Injectable } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { VehicleRepository } from '../repository/vehicle.repository';
import { VehicleDTO } from '../dto/vehicle.dto';
import { Vehicle } from '../entity/vehicle.entity';
import { StarWarsAPI } from '../api/swapi';
import { VehicleData } from '../api/data/vehicle.data';

@Injectable()
export class VehicleService {
  constructor(
    private readonly vehicleRepository: VehicleRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getVehicles(
    page: number,
    limit: number,
  ): Promise<PageDTO<VehicleDTO[]>> {
    const [vehiclesDB, total] = await this.vehicleRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (!total) {
      const vehiclesAPI = await this.starWarsAPI.getVehicles(page, limit);

      const data = await Promise.all(
        vehiclesAPI.map(async (vehicleAPI) => {
          return await this.getVehicle(vehicleAPI.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    if (total >= limit) {
      return new PageDTO(
        this.toDTOs(vehiclesDB),
        vehiclesDB.length,
        page,
        limit,
      );
    }

    if (total < limit) {
      const vehiclesAPI = await this.starWarsAPI.getVehicles(page, limit);

      const missingVehicles = await this.removeRedundant(
        vehiclesAPI,
        vehiclesDB,
      );

      const data = await Promise.all(
        missingVehicles.map(async (vehicle) => {
          return await this.getVehicle(vehicle.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }
  }

  public async getVehicle(id: string): Promise<VehicleDTO> {
    const vehicle: Vehicle = await this.vehicleRepository.findById(id);

    if (!vehicle) {
      const vehicleData: VehicleData = await this.starWarsAPI.getVehicle(id);
      const created: Vehicle = await this.vehicleRepository.save(
        this.toVehicle(vehicleData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(vehicle);
  }

  private toDTO(vehicle: Vehicle): VehicleDTO {
    return new VehicleDTO(vehicle);
  }

  private toDTOs(vehicles: Vehicle[]): VehicleDTO[] {
    return vehicles.map((vehicle) => this.toDTO(vehicle));
  }

  private toVehicle(vehicleData: VehicleData): Vehicle {
    const vehicle: Vehicle = new Vehicle();

    vehicle.setId(vehicleData.getId());
    vehicle.setName(vehicleData.getName());
    vehicle.setModel(vehicleData.getModel());
    vehicle.setVehicleClass(vehicleData.getVehicleClass());
    vehicle.setManufacturer(vehicleData.getManufacturer());
    vehicle.setLength(vehicleData.getLength());
    vehicle.setCostInCredits(vehicleData.getCostInCredits());
    vehicle.setCrew(vehicleData.getCrew());
    vehicle.setPassengers(vehicleData.getPassengers());
    vehicle.setMaxAtmospheringSpeed(vehicleData.getMaxAtmospheringSpeed());
    vehicle.setCargoCapacity(vehicleData.getCargoCapacity());
    vehicle.setConsumables(vehicleData.getConsumables());
    vehicle.setFilms(vehicleData.getFilms());
    vehicle.setPilots(vehicleData.getPilots());
    vehicle.setUrl(vehicleData.getUrl());
    vehicle.setCreatedAt(vehicleData.getCreatedAt());
    vehicle.setEditedAt(vehicleData.getEditedAt());

    return vehicle;
  }

  private async removeRedundant(
    vehiclesAPI: VehicleData[],
    vehiclesDB: Vehicle[],
  ) {
    return await Promise.all(
      vehiclesAPI.filter(
        async (vehicleAPI) =>
          !vehiclesDB.some(
            (vehicleDB) => vehicleDB.getId() === vehicleAPI.getId(),
          ),
      ),
    );
  }
}
