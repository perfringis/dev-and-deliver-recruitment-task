import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Starship } from 'src/starship/starship.entity';

@Injectable()
export class StarshipRepository extends Repository<Starship> {
  constructor(private dataSource: DataSource) {
    super(Starship, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Starship> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
