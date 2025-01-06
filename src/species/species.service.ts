import { Injectable } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { StarWarsAPI } from '../api/swapi';
import { SpeciesData } from '../api/data/species.data';
import { SpeciesDTO } from 'src/species/species.dto';
import { SpeciesRepository } from './species.repository';
import { Species } from './species.entity';

@Injectable()
export class SpeciesService {
  constructor(
    private readonly speciesRepository: SpeciesRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getSpecies(
    page: number,
    limit: number,
  ): Promise<PageDTO<SpeciesDTO[]>> {
    const [speciesDB, total] = await this.speciesRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (!total) {
      const speciesAPI = await this.starWarsAPI.getSpecies(page, limit);

      const data = await Promise.all(
        speciesAPI.map(async (kindAPI) => {
          return await this.getKind(kindAPI.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    if (total >= limit) {
      return new PageDTO(this.toDTOs(speciesDB), speciesDB.length, page, limit);
    }

    if (total < limit) {
      const speciesAPI = await this.starWarsAPI.getSpecies(page, limit);

      const missingSpecies = await this.removeRedundant(speciesAPI, speciesDB);

      const data = await Promise.all(
        missingSpecies.map(async (kind) => {
          return await this.getKind(kind.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }
  }

  public async getKind(id: string): Promise<SpeciesDTO> {
    const kind: Species = await this.speciesRepository.findById(id);

    if (!kind) {
      const kindData: SpeciesData = await this.starWarsAPI.getKind(id);
      const created: Species = await this.speciesRepository.save(
        this.toKind(kindData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(kind);
  }

  private toDTO(species: Species): SpeciesDTO {
    return new SpeciesDTO(species);
  }

  private toDTOs(species: Species[]): SpeciesDTO[] {
    return species.map((kind) => this.toDTO(kind));
  }

  private toKind(kindData: SpeciesData): Species {
    const species: Species = new Species();

    species.setId(kindData.getId());
    species.setName(kindData.getName());
    species.setClassification(kindData.getClassification());
    species.setDesignation(kindData.getDesignation());
    species.setAverageHeight(kindData.getAverageHeight());
    species.setAverageLifespan(kindData.getAverageLifespan());
    species.setEyeColors(kindData.getEyeColors());
    species.setHairColors(kindData.getHairColors());
    species.setSkinColors(kindData.getSkinColors());
    species.setLanguage(kindData.getLanguage());
    species.setHomeWorld(kindData.getHomeWorld());
    species.setPeople(kindData.getPeople());
    species.setFilms(kindData.getFilms());
    species.setUrl(kindData.getUrl());
    species.setCreatedAt(kindData.getCreatedAt());
    species.setEditedAt(kindData.getEditedAt());

    return species;
  }

  private async removeRedundant(
    speciesAPI: SpeciesData[],
    speciesDB: Species[],
  ) {
    return await Promise.all(
      speciesAPI.filter(
        async (kindAPI) =>
          !speciesDB.some((kindDB) => kindDB.getId() === kindAPI.getId()),
      ),
    );
  }
}
