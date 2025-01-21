import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicle/entity/vehicle.entity';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  constructor(private dataSource: DataSource) {
    super(Vehicle, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Vehicle> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
