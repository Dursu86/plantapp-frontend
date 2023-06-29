import { config } from "../../../config";
import { UsersState } from "../../users/reducer/user.slice";
import {
  Plant,
  PlantBackResponse,
  PlantInTheList,
  ProtoPlant,
} from "../models/plant.model";

export interface PlantRepoStructure {
  addPlantRepo(info: ProtoPlant): Promise<Plant>;
}

export class PlantsApiRepo {
  url: string;
  constructor() {
    this.url = `${config.backendUrl}/plants/`;
  }
  async addPlantRepo(info: ProtoPlant, userInfo: UsersState): Promise<Plant> {
    const plantData = { ...info, userInfo: userInfo.userLogged?.user };
    const resp = await fetch(this.url + "add", {
      method: "POST",
      body: JSON.stringify(plantData),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + userInfo.userLogged?.token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as Plant;

    return data;
  }

  async deletePlantsRepo(id: string, token: string): Promise<void> {
    const resp = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
  async getPlantsRepo(token: string, page?: number): Promise<PlantInTheList[]> {
    const resp = await fetch(`${this.url}?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data: PlantBackResponse = await resp.json();
    return data.results;
  }
  async getPlantById(id: string, token: string): Promise<Plant> {
    const resp = await fetch(this.url + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as PlantBackResponse;
    return data.results[0] as Plant;
  }
}
