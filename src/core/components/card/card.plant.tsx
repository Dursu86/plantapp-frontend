import { PlantInTheList } from "../../../features/plants/models/plant.model";
import { Delete } from "../delete/delete.plant";
import { Edit } from "../edit/edit";
import styles from "./card.module.scss";

type CardProps = {
  info: PlantInTheList;
};

export default function CardPlant({ info }: CardProps) {
  return (
    <div>
      <li key={info.id} className={styles.card}>
        <img src={info.photo} alt={info.name} className={styles.photo} />
        <section className={styles.info}>
          <span className={styles.edit}>
            <p className={styles.location}>{info.location}</p>
            <Edit id={info.id}></Edit>
          </span>
          <span className={styles.name}>
            <p>{info.name}</p>
            <span className={styles.delete}>
              <Delete id={info.id}></Delete>
            </span>
          </span>
        </section>
      </li>
    </div>
  );
}
