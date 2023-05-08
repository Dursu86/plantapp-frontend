import { PlantForm } from "../../core/components/forms/plant.form";
import { Header } from "../../core/components/header/header";

const editOptions = {
  h1: "Edit",
  h2: "your plant",
};

export default function EditPage() {
  return (
    <>
      <PlantForm titles={editOptions}></PlantForm>
      <Header></Header>
    </>
  );
}
