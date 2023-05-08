/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */

import { usePlants } from "../../../features/plants/hooks/use.plants";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import PlantList from "./plantList";
import { store } from "../../store/store";
import { PlantInTheList } from "../../../features/plants/models/plant.model";

jest.mock("../card/card.plant.tsx");
jest.mock("../../../features/plants/hooks/use.plants.tsx");

beforeEach(async () => {
  await act(async () => {
    const mockState = [
      { id: 1, name: "Plant1" },
      { id: 2, name: "Plant2" },
    ] as unknown as PlantInTheList;
    (usePlants as jest.Mock).mockReturnValue({
      getPlants: jest.fn(),
      plants: {
        plantList: mockState,
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <PlantList></PlantList>
        </Router>
      </Provider>
    );
  });
});

describe("Given the Plant list component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
    });
  });
});
