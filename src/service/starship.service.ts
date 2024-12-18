import { Injectable, NotFoundException } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { StarshipRepository } from '../repository/starship.repository';
import { StarshipDTO } from '../dto/starship.dto';
import { Starship } from '../entity/starship.entity';

@Injectable()
export class StarshipService {
  constructor(private readonly starshipRepository: StarshipRepository) {}

  public async getStarships(
    page: number,
    limit: number,
  ): Promise<PageDTO<StarshipDTO[]>> {
    const [data, total] = await this.starshipRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getStarship(id: string): Promise<StarshipDTO> {
    const starship: Starship = await this.starshipRepository.findById(id);

    if (!starship) {
      throw new NotFoundException(`Starship does not exist, id = ${id}`);
    }

    return this.toDTO(starship);
  }

  private toDTO(starship: Starship): StarshipDTO {
    return new StarshipDTO(starship);
  }

  private toDTOs(starships: Starship[]): StarshipDTO[] {
    return starships.map((starship) => this.toDTO(starship));
  }
}
