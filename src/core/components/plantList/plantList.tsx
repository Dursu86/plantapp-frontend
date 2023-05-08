/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantInTheList } from "../../../features/plants/models/plant.model";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import CardPlant from "../card/card.plant";
import styles from "./plantList.module.scss";

export default function PlantList() {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { getPlants, plants } = usePlants(repo);

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <>
      <h1 className={styles.h1}>Let's find your plants!</h1>
      <ul className={styles.ul}>
        {plants.plantList.map((item: PlantInTheList) => (
          <CardPlant info={item} key={item.id}></CardPlant>
        ))}
      </ul>
    </>
  );
}
