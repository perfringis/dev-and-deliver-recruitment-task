import { Injectable, NotFoundException } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { PlanetRepository } from '../repository/planet.repository';
import { PlanetDTO } from '../dto/planet.dto';
import { Planet } from '../entity/planet.entity';

@Injectable()
export class PlanetService {
  constructor(private readonly planetRepository: PlanetRepository) {}

  public async getPlanets(
    page: number,
    limit: number,
  ): Promise<PageDTO<PlanetDTO[]>> {
    const [data, total] = await this.planetRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getPlanet(id: string): Promise<PlanetDTO> {
    const planet: Planet = await this.planetRepository.findById(id);

    if (!planet) {
      throw new NotFoundException(`Planet does not exist, id = ${id}`);
    }

    return this.toDTO(planet);
  }

  private toDTO(planet: Planet): PlanetDTO {
    return new PlanetDTO(planet);
  }

  private toDTOs(planets: Planet[]): PlanetDTO[] {
    return planets.map((planet) => this.toDTO(planet));
  }
}
