import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Film } from '../entity/film.entity';

@Injectable()
export class FilmRepository extends Repository<Film> {
  constructor(private dataSource: DataSource) {
    super(Film, dataSource.createEntityManager());
  }

  public async findById(id: string): Promise<Film> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }
}
