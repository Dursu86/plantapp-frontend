import { LoginData } from "../reducer/user.slice";
import { Plant } from "../../plants/models/plant.model";

export type hasId = {
  id: string;
};
export type protoUser = {
  name: string;
  email: string;
  passwd: string;
  plantList: Plant[];
  myPlants: Plant[];
};

export type User = hasId & protoUser;

export type UserBackResponse = {
  results: LoginData[];
};
