import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import styles from "./pagination.module.scss";

export function Pagination() {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { getPlants } = usePlants(repo);

  const handleLoad = async (ev: SyntheticEvent) => {
    await getPlants();
  };
  return (
    <>
      <button onClick={handleLoad} className={styles.button}>
        Load more
      </button>
    </>
  );
}
