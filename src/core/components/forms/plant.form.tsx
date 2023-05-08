/* eslint-disable jsx-a11y/no-redundant-roles */
import { SyntheticEvent, useMemo } from "react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import {
  ProtoPlant,
  Location,
} from "../../../features/plants/models/plant.model";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import { FormProps } from "../../../types/formTypes";
import styles from "./plant.form.module.scss";

export function PlantForm({ titles }: FormProps) {
  const repo = useMemo(() => new PlantsApiRepo(), []);
  const { addPlant, plants } = usePlants(repo);
  const actualPlant = plants.actualPlant;

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formAddPlant = ev.currentTarget;
    const file = (formAddPlant.elements[9] as HTMLInputElement).files?.item(0);
    if (!file) return;
    const addInfo: ProtoPlant = {
      name: (formAddPlant.elements[0] as HTMLInputElement).value,
      location: (
        formAddPlant.elements.namedItem("location") as HTMLInputElement
      ).value as Location,
      height: (formAddPlant.elements[4] as HTMLInputElement).value,
      humidity: (formAddPlant.elements[5] as HTMLInputElement).value,
      lightness: (formAddPlant.elements[6] as HTMLInputElement).value,
      difficulty: (formAddPlant.elements[7] as HTMLInputElement).value,
      petFriendly: (formAddPlant.elements[8] as HTMLInputElement).checked,
    };
    addPlant(addInfo, file);

    formAddPlant.reset();
  };

  return (
    <>
      <h1 className={styles.h1}>{titles.h1}</h1>
      <h2 className={styles.h2}>{titles.h2}</h2>
      <form data-testid="form" onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          name="password"
          role="textbox"
          required
          defaultValue={actualPlant ? actualPlant.name : ""}
          className={styles.name}
        />
        <span className={styles.radio}>
          <label className={styles.label}>
            Indoor
            <input
              className={styles.indoor}
              type="radio"
              name="location"
              value="indoor"
              required
              defaultChecked={
                actualPlant ? actualPlant.location === "indoor" : false
              }
            />
          </label>
          <label className={styles.label}>
            Outdoor
            <input
              className={styles.outdoor}
              id="outdoor"
              type="radio"
              name="location"
              value="outdoor"
              defaultChecked={
                actualPlant ? actualPlant.location === "outdoor" : false
              }
            />
          </label>
          <label className={styles.label}>
            Both
            <input
              className={styles.both}
              id="both"
              type="radio"
              name="location"
              value="both"
              defaultChecked={
                actualPlant ? actualPlant.location === "both" : false
              }
            />
          </label>
        </span>
        <label htmlFor="height" className={styles.heightField}>
          Height
          <input
            className={styles.height}
            type="number"
            name="height"
            min="5"
            max="200"
            step="1"
            required
            defaultValue={actualPlant ? actualPlant.height : 5}
          />
          <span>cms.</span>
        </label>
        <div className={styles.range}>
          <label htmlFor="humidity">
            Humidity
            <input
              className={styles.humidity}
              type="range"
              name="humidity"
              min="1"
              max="10"
              step="1"
              defaultValue={actualPlant ? actualPlant.humidity : 5}
            />
            <span className={styles.humLabel}>
              <p className={styles.labelL}>Dry</p>
              <p className={styles.labelR}>Moist</p>
            </span>
          </label>
          <label htmlFor="lightness">
            Lightness
            <input
              className={styles.lightness}
              type="range"
              name="lightness"
              min="1"
              max="4"
              step="1"
              defaultValue={actualPlant ? actualPlant.lightness : 2}
            />
            <span className={styles.humLabel}>
              <p className={styles.labelL}>Shade</p>
              <p className={styles.labelR}>Sunny</p>
            </span>
          </label>
          <label htmlFor="difficulty">
            Difficulty
            <input
              className={styles.difficulty}
              type="range"
              name="difficulty"
              min="1"
              max="4"
              step="1"
              defaultValue={actualPlant ? actualPlant.difficulty : 2}
            />
            <span className={styles.humLabel}>
              <p className={styles.labelL}>Beginner</p>
              <p className={styles.labelR}> Expert</p>
            </span>
          </label>
        </div>
        <label className={styles.labelPet}>
          <input
            className={styles.pet}
            type="checkbox"
            name="petFriendly"
            defaultChecked={actualPlant ? actualPlant.petFriendly : false}
          />
          <span>Pet friendly</span>
        </label>
        <label htmlFor="photo" className={styles.photo}>
          <span>Upload photo</span>
          <input type="file" placeholder="Photo" name="photo" required />
        </label>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </>
  );
}
