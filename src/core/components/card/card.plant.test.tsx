/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import {
  PlantInTheList,
  Location,
} from "../../../features/plants/models/plant.model";
import CardPlant from "./card.plant";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../../features/users/reducer/user.slice";
import { User } from "../../../features/users/models/user.model";

jest.mock("../../../features/plants/services/plants.api.repo");
jest.mock("../../../features/plants/hooks/use.plants.tsx");
jest.mock("../edit/edit.tsx");
jest.mock("../delete/delete.plant.tsx");

const mockPlant: PlantInTheList = {
  photo: "test image",
  location: "test location" as Location,

  name: "test name",
  id: "test id",
};

const mockUser = {
  myPlants: [mockPlant, "Plant test" as unknown as PlantInTheList],
} as unknown as User;

const mockStore = configureStore({
  reducer: {
    users: userReducer,
  },
  preloadedState: {
    users: {
      userLogged: {
        token: "mockToken",
        user: mockUser,
      },
    },
  },
});

const mockStoreFail = configureStore({
  reducer: {
    users: userReducer,
  },
  preloadedState: {
    users: {
      userLogged: null,
    },
  },
});
beforeEach(() => {
  render(
    <Provider store={mockStore}>
      <Router>
        <CardPlant info={mockPlant}></CardPlant>;
      </Router>
    </Provider>
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

  describe("When there is no userLogged", () => {
    test("Then it should throw an advice", async () => {
      render(
        <Provider store={mockStoreFail}>
          <Router>
            <CardPlant info={mockPlant}></CardPlant>;
          </Router>
        </Provider>
      );
      const element = await screen.findByText(/please/i);
      expect(element).toBeInTheDocument();
    });
  });
});
