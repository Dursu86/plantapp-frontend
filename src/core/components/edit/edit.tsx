import { SyntheticEvent, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import styles from "./edit.module.scss";

export type editProps = {
  id: string;
};
export function Edit({ id }: editProps) {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { updatePlant } = usePlants(repo);
  const navigate = useNavigate();

  const handleClick = async (ev: SyntheticEvent) => {
    await updatePlant(id);
    navigate("/edit");
  };
  return (
    <button type="button" onClick={handleClick} className={styles.edit}>
      Edit
    </button>
  );
}
