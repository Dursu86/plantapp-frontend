/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import { Pagination } from "./pagination";

jest.mock("../../../features/plants/hooks/use.plants.tsx");

const mockRepo = {
  getPlantsRepo: jest.fn(),
} as unknown as PlantsApiRepo;

beforeEach(() => {
  (usePlants as jest.Mock).mockReturnValue({
    getPlants: jest.fn().mockResolvedValue("test"),
  });
  render(<Pagination></Pagination>);
});

describe("Given the pagination component", () => {
  describe("When it is render", () => {
    test("Then it should print a button", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the user click on it", () => {
    test("Then, getPlants should be called", async () => {
      const button = screen.getByRole("button");
      await fireEvent.click(button);
      expect(usePlants(mockRepo).getPlants).toHaveBeenCalled();
    });
  });
});
