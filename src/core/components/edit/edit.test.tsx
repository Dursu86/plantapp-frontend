/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { Edit, editProps } from "./edit";
import { MemoryRouter as Router } from "react-router-dom";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import { store } from "../../store/store";
import { Provider } from "react-redux";

jest.mock("../../../features/plants/hooks/use.plants.tsx");
const mockRepo = {
  updatePlant: jest.fn(),
} as unknown as PlantsApiRepo;

const mockEditProps = {
  id: "test",
} as editProps;
describe("Given the edit component", () => {
  beforeEach(async () => {
    await act(async () => {
      (usePlants as jest.Mock).mockReturnValue({
        updatePlant: jest.fn(),
      });

      render(
        <Provider store={store}>
          <Router>
            <Edit id={"test"}></Edit>;
          </Router>
          /
        </Provider>
      );
    });
  });

  describe("When it is render", () => {
    test("Then it should print a button", () => {
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
  describe("And when clicking on it", () => {
    test("The hook method should be called", async () => {
      const button = screen.getByRole("button");
      await act(async () => {
        fireEvent.click(button);
      });
      expect(usePlants(mockRepo).updatePlant).toHaveBeenCalled();
    });
  });
});
