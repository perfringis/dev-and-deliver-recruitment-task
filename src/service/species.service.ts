import { Injectable, NotFoundException } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { SpeciesRepository } from '../repository/species.repository';
import { Species } from '../entity/species.entity';
import { SpeciesDTO } from '../dto/species.dto';

@Injectable()
export class SpeciesService {
  constructor(private readonly speciesRepository: SpeciesRepository) {}

  public async getSpecies(
    page: number,
    limit: number,
  ): Promise<PageDTO<SpeciesDTO[]>> {
    const [data, total] = await this.speciesRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return new PageDTO(this.toDTOs(data), total, page, limit);
  }

  public async getKind(id: string): Promise<SpeciesDTO> {
    const kind: Species = await this.speciesRepository.findById(id);

    if (!kind) {
      throw new NotFoundException(`Species does not exist, id = ${id}`);
    }

    return this.toDTO(kind);
  }

  private toDTO(species: Species): SpeciesDTO {
    return new SpeciesDTO(species);
  }

  private toDTOs(species: Species[]): SpeciesDTO[] {
    return species.map((kind) => this.toDTO(kind));
  }
}
