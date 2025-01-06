import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Species } from './species.entity';

@Injectable()
export class SpeciesRepository extends Repository<Species> {
  constructor(private dataSource: DataSource) {
    super(Species, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Species> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
