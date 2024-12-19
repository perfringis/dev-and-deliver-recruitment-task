import { Injectable } from '@nestjs/common';
import { PageDTO } from '../dto/page.dto';
import { PlanetRepository } from '../repository/planet.repository';
import { PlanetDTO } from '../dto/planet.dto';
import { Planet } from '../entity/planet.entity';
import { PlanetData } from 'src/api/data/planet.data';
import { StarWarsAPI } from 'src/api/swapi';

@Injectable()
export class PlanetService {
  constructor(
    private readonly planetRepository: PlanetRepository,
    private readonly starWarsAPI: StarWarsAPI,
  ) {}

  public async getPlanets(
    page: number,
    limit: number,
  ): Promise<PageDTO<PlanetDTO[]>> {
    const [planetsDB, total] = await this.planetRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    if (!total) {
      const planetsAPI = await this.starWarsAPI.getPlanets(page, limit);

      const data = await Promise.all(
        planetsAPI.map(async (planetAPI) => {
          return await this.getPlanet(planetAPI.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }

    if (total >= limit) {
      return new PageDTO(this.toDTOs(planetsDB), planetsDB.length, page, limit);
    }

    if (total < limit) {
      const peopleAPI = await this.starWarsAPI.getPlanets(page, limit);

      const missingPlanets = await this.removeRedundant(peopleAPI, planetsDB);

      const data = await Promise.all(
        missingPlanets.map(async (planet) => {
          return await this.getPlanet(planet.getId());
        }),
      );

      return new PageDTO(data, data.length, page, limit);
    }
  }

  public async getPlanet(id: string): Promise<PlanetDTO> {
    const planet: Planet = await this.planetRepository.findById(id);

    if (!planet) {
      const planetData: PlanetData = await this.starWarsAPI.getPlanet(id);
      const created: Planet = await this.planetRepository.save(
        this.toPlanet(planetData),
      );

      return this.toDTO(created);
    }

    return this.toDTO(planet);
  }

  private toDTO(planet: Planet): PlanetDTO {
    return new PlanetDTO(planet);
  }

  private toDTOs(planets: Planet[]): PlanetDTO[] {
    return planets.map((planet) => this.toDTO(planet));
  }

  private toPlanet(planetData: PlanetData): Planet {
    const planet: Planet = new Planet();

    planet.setId(planetData.getId());
    planet.setName(planetData.getName());
    planet.setDiameter(planetData.getDiameter());
    planet.setRotationPeriod(planetData.getRotationPeriod());
    planet.setOrbitalPeriod(planetData.getOrbitalPeriod());
    planet.setGravity(planetData.getGravity());
    planet.setPopulation(planetData.getPopulation());
    planet.setClimate(planetData.getClimate());
    planet.setTerrain(planetData.getTerrain());
    planet.setSurfaceWater(planetData.getSurfaceWater());
    planet.setResidents(planetData.getResidents());
    planet.setFilms(planetData.getFilms());
    planet.setUrl(planetData.getUrl());
    planet.setCreatedAt(planetData.getCreatedAt());
    planet.setEditedAt(planetData.getEditedAt());

    return planet;
  }

  private async removeRedundant(peopleAPI: PlanetData[], peopleDB: Planet[]) {
    return await Promise.all(
      peopleAPI.filter(
        async (personAPI) =>
          !peopleDB.some((personDB) => personDB.getId() === personAPI.getId()),
      ),
    );
  }
}
