import { useMemo } from "react";
import { PlantInTheList } from "../../../features/plants/models/plant.model";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UsersApiRepo } from "../../../features/users/services/users.api.repo";
import { Delete } from "../delete/delete.plant";
import { Edit } from "../edit/edit";
import styles from "./card.module.scss";
import { useNavigate } from "react-router-dom";

type CardProps = {
  info: PlantInTheList;
};

export default function CardPlant({ info }: CardProps) {
  const repo = useMemo(() => new UsersApiRepo(), []);
  const { users } = useUsers(repo);
  const navigate = useNavigate();
  if (!users.userLogged) {
    navigate("/login");
    return <p>Please log in to access this page.</p>;
  }
  const userPlants = users.userLogged.user.myPlants;
  const checkPlant = userPlants.some((plant) => plant.id === info.id);
  return (
    <div>
      <li key={info.id} className={styles.card}>
        <img src={info.photo} alt={info.name} className={styles.photo} />
        <section className={styles.info}>
          <span className={styles.edit}>
            <p className={styles.location}>{info.location}</p>
            {checkPlant && <Edit id={info.id}></Edit>}
          </span>
          <span className={styles.name}>
            <p>{info.name}</p>
            <span className={styles.delete}>
              {checkPlant && <Delete id={info.id}></Delete>}
            </span>
          </span>
        </section>
      </li>
    </div>
  );
}
