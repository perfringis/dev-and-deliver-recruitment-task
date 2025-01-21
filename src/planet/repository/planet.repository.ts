import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Planet } from 'src/planet/entity/planet.entity';

@Injectable()
export class PlanetRepository extends Repository<Planet> {
  constructor(private dataSource: DataSource) {
    super(Planet, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Planet> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
