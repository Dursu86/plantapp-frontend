/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import {
  PlantInTheList,
  Location,
} from "../../../features/plants/models/plant.model";
import CardPlant from "./card.plant";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("../../../features/plants/services/plants.api.repo");
jest.mock("../../../features/plants/hooks/use.plants.tsx");

const mockPlant: PlantInTheList = {
  photo: "test image",
  location: "test location" as Location,
  name: "test name",
  id: "test id",
};
beforeEach(() => {
  (usePlants as jest.Mock).mockReturnValue({ updatePlant: jest.fn() });
  render(
    <Router>
      <CardPlant info={mockPlant}></CardPlant>;
    </Router>
  );
});

describe("Given the card plant component", () => {
  describe("When it is render", () => {
    test("Then it should print different elements", async () => {
      const image = await screen.findByRole("img");
      expect(image).toBeInTheDocument();
      const location = await screen.findByText(/location/i);
      expect(location).toBeInTheDocument();
      const name = await screen.findByText(/name/i);
      expect(name).toBeInTheDocument();
    });
  });
});
