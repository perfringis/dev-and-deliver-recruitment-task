import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmService {
  public async getFilms() {
    return [];
  }

  public async getFilm(id: string) {
    return undefined;
  }
}
