import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store/store";
import { ProtoPlant } from "../models/plant.model";
import { setError } from "../../../reducer/error.slice";
import {
  changePlant,
  changePlantList,
  deletePlant,
} from "../reducer/plant.slice";
import { PlantsApiRepo } from "../services/plants.api.repo";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useCallback } from "react";
import { storage } from "../../../core/services/firebase/firebase";

export function usePlants(repo: PlantsApiRepo) {
  const plants = useSelector((state: RootState) => state.plants);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users);

  const addPlant = async (info: ProtoPlant, file: File) => {
    console.log("add");
    try {
      const token = users.userLogged?.token;
      if (!token) throw new Error("You must be logged");
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file);
      const imgURL = await getDownloadURL(storageRef);
      info.photo = imgURL;
      await repo.addPlantRepo(info, token);
    } catch (error) {
      console.log("error");
      dispatch(setError((error as Error).message));
    }
  };

  const getPlants = useCallback(async () => {
    try {
      const token = users.userLogged?.token;
      if (!token) {
        throw new Error("You must be logged");
      }
      const actualPage = Math.floor(plants.plantList.length / 5);
      const result = await repo.getPlantsRepo(token, actualPage + 1);
      dispatch(changePlantList(result));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  }, [dispatch, users.userLogged?.token, plants.plantList, repo]);

  const updatePlant = async (id: string) => {
    try {
      const token = users.userLogged?.token;
      if (!token) throw new Error("You must be logged");
      const result = await repo.getPlantById(id, token);
      dispatch(changePlant(result));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  const deletePlantById = async (id: string) => {
    try {
      const token = users.userLogged?.token;
      if (!token) throw new Error("You must be logged");
      await repo.deletePlantsRepo(id, token);
      dispatch(deletePlant(id));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };

  return {
    plants,
    addPlant,
    getPlants,
    updatePlant,
    deletePlantById,
  };
}
