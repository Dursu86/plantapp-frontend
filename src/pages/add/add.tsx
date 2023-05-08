import { PlantForm } from "../../core/components/forms/plant.form";
import { Header } from "../../core/components/header/header";

const addOptions = {
  h1: "Add",
  h2: "a new plant",
};

export default function AddPage() {
  return (
    <>
      <PlantForm titles={addOptions}></PlantForm>
      <Header></Header>
    </>
  );
}
