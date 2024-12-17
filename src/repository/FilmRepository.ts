import { DataSource, Repository } from 'typeorm';
import { Film } from '../entity/film.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmRepository extends Repository<Film> {
  constructor(private dataSource: DataSource) {
    super(Film, dataSource.createEntityManager());
  }
}
