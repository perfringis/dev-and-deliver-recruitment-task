import { Injectable } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { StarWarsAPI } from '../api/swapi';
import { StarshipData } from '../api/data/starship.data';
import { Starship } from 'src/starship/starship.entity';
import { StarshipDTO } from 'src/starship/starship.dto';
import { StarshipRepository } from 'src/starship/starship.repository';

@Injectable()
export class StarshipService {
  constructor(
    private readonly starshipRepository: StarshipRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getStarships(
    page: number,
    limit: number,
  ): Promise<PageDTO<StarshipDTO[]>> {
    const [starshipsDB, total] = await this.starshipRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (!total) {
      const starshipsAPI = await this.starWarsAPI.getStarShips(page, limit);

      const data = await Promise.all(
        starshipsAPI.map(async (starshipAPI) => {
          return await this.getStarship(starshipAPI.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    if (total >= limit) {
      return new PageDTO(
        this.toDTOs(starshipsDB),
        starshipsDB.length,
        page,
        limit,
      );
    }

    if (total < limit) {
      const starshipsAPI = await this.starWarsAPI.getStarShips(page, limit);

      const missingStarships = await this.removeRedundant(
        starshipsAPI,
        starshipsDB,
      );

      const data = await Promise.all(
        missingStarships.map(async (starship) => {
          return await this.getStarship(starship.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }
  }

  public async getStarship(id: string): Promise<StarshipDTO> {
    const starship: Starship = await this.starshipRepository.findById(id);

    if (!starship) {
      const starshipData: StarshipData = await this.starWarsAPI.getStarShip(id);
      const created: Starship = await this.starshipRepository.save(
        this.toStarship(starshipData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(starship);
  }

  private toDTO(starship: Starship): StarshipDTO {
    return new StarshipDTO(starship);
  }

  private toDTOs(starships: Starship[]): StarshipDTO[] {
    return starships.map((starship) => this.toDTO(starship));
  }

  private toStarship(starshipData: StarshipData): Starship {
    const starship: Starship = new Starship();

    starship.setId(starshipData.getId());
    starship.setName(starshipData.getName());
    starship.setModel(starshipData.getModel());
    starship.setStarshipClass(starshipData.getStarshipClass());
    starship.setManufacturer(starshipData.getManufacturer());
    starship.setCostInCredits(starshipData.getCostInCredits());
    starship.setLength(starshipData.getLength());
    starship.setCrew(starshipData.getCrew());
    starship.setPassengers(starshipData.getPassengers());
    starship.setMaxAtmospheringSpeed(starshipData.getMaxAtmospheringSpeed());
    starship.setHyperDriveRating(starshipData.getHyperDriveRating());
    starship.setMglt(starshipData.getMglt());
    starship.setCargoCapacity(starshipData.getCargoCapacity());
    starship.setConsumables(starshipData.getConsumables());
    starship.setFilms(starshipData.getFilms());
    starship.setPilots(starshipData.getPilots());
    starship.setUrl(starshipData.getUrl());
    starship.setCreatedAt(starshipData.getCreatedAt());
    starship.setEditedAt(starshipData.getEditedAt());

    return starship;
  }

  private async removeRedundant(
    starshipsAPI: StarshipData[],
    starshipsDB: Starship[],
  ) {
    return await Promise.all(
      starshipsAPI.filter(
        async (starshipAPI) =>
          !starshipsDB.some(
            (starshipDB) => starshipDB.getId() === starshipAPI.getId(),
          ),
      ),
    );
  }
}
