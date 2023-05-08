/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { usePlants } from "../../../features/plants/hooks/use.plants";
import { PlantsApiRepo } from "../../../features/plants/services/plants.api.repo";
import { FormProps } from "../../../types/formTypes";
import { PlantForm } from "./plant.form";

jest.mock("../../../features/plants/hooks/use.plants.tsx");

let textInput: HTMLInputElement;
let radioInputs: HTMLInputElement[];
let heightInput: HTMLInputElement;
let rangeInputs: HTMLInputElement[];
let petInput: HTMLInputElement;
let fileInput: HTMLInputElement;
let button: HTMLInputElement;

const mockTitles = {
  titles: {
    h1: "test",
    h2: "test",
  },
} as unknown as FormProps;

describe("Given Add PlantForm component", () => {
  beforeEach(async () => {
    await act(async () => {
      (usePlants as jest.Mock).mockReturnValue({
        addPlant: jest.fn(),
        plants: {
          actualPlant: null,
        },
      });
      render(
        <Provider store={store}>
          <PlantForm titles={mockTitles.titles}></PlantForm>
        </Provider>
      );
    });
    textInput = screen.getByRole("textbox");
    radioInputs = screen.getAllByRole("radio");
    heightInput = screen.getByRole("spinbutton");
    rangeInputs = screen.getAllByRole("slider");
    petInput = screen.getByRole("checkbox");
    fileInput = screen.getByPlaceholderText("Photo");
    button = screen.getByRole("button");
  });
  describe("When the component is rendered", () => {
    test("Then the text inputs should be in the document", () => {
      expect(textInput).toBeInTheDocument();
    });

    test("Then the radio inputs should be in the document", () => {
      expect(radioInputs.length).toBe(3);
    });

    test("Then the height input should be in the document", () => {
      expect(heightInput).toBeInTheDocument();
    });

    test("Then the range input should be in the document", () => {
      expect(rangeInputs.length).toBe(3);
    });

    test("Then the petFriendly input should be in the document", () => {
      expect(petInput).toBeInTheDocument();
    });
    test("Then the image input should be in the document", () => {
      expect(fileInput).toBeInTheDocument();
    });

    test("Then the <button> should be in the document", () => {
      expect(button).toBeInTheDocument();
    });
  });
  describe("When there is no file to upload", () => {
    test("Then, the handleSubmit function should not be called", async () => {
      const plantsMockRepo = {} as unknown as PlantsApiRepo;
      await userEvent.type(textInput, "test");
      let radioInputs = screen.getByLabelText("Indoor");
      await fireEvent.change(radioInputs, {
        target: { value: "outdoor" },
      });
      await userEvent.type(heightInput, "6");
      await fireEvent.change(rangeInputs[0], { target: { value: 1 } });
      await fireEvent.change(rangeInputs[1], { target: { value: 4 } });
      await fireEvent.change(rangeInputs[2], { target: { value: 3 } });
      await userEvent.click(petInput);
      userEvent.type(fileInput, "test");
      await userEvent.click(button);
      expect(usePlants(plantsMockRepo).addPlant).not.toHaveBeenCalled();
    });
  });
  describe("When all the fields are complete", () => {
    test("Then, the handleSubmit function should be called", async () => {
      const plantsMockRepo = {} as unknown as PlantsApiRepo;
      await userEvent.type(textInput, "test");
      let radioInputs = screen.getByLabelText("Indoor");
      await fireEvent.change(radioInputs, { target: { value: "outdoor" } });
      await fireEvent.change(heightInput, { target: { value: "6" } });
      await fireEvent.change(rangeInputs[0], { target: { value: 2 } });
      await fireEvent.change(rangeInputs[1], { target: { value: 2 } });
      await fireEvent.change(rangeInputs[2], { target: { value: 2 } });
      await fireEvent.change(petInput, { target: { checked: true } });
      const fileInput = screen.getByPlaceholderText("Photo");
      userEvent.upload(
        fileInput,
        new File(["test"], "test.png", {
          type: "image/png",
        })
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(usePlants(plantsMockRepo).addPlant).toHaveBeenCalledWith(
        {
          name: "test",
          location: "outdoor",
          height: "6",
          humidity: "2",
          lightness: "2",
          difficulty: "2",
          petFriendly: true,
        },
        new File(["test"], "test.png", {
          type: "image/png",
        })
      );
    });
  });
});
describe("When the form is called from edit", () => {
  const mockActualPlant = {
    id: "test id",
    name: "test name",
    location: "indoor",
    height: "30",
    lightness: "3",
    humidity: "1",
    difficulty: "2",
    petFriendly: true,
    photo: "test photo",
  };

  beforeEach(async () => {
    await act(async () => {
      (usePlants as jest.Mock).mockReturnValue({
        addPlant: jest.fn(),
        plants: {
          actualPlant: mockActualPlant,
        },
      });
      render(
        <Provider store={store}>
          <PlantForm titles={mockTitles.titles}></PlantForm>
        </Provider>
      );
    });
    textInput = screen.getByRole("textbox");
    heightInput = screen.getByRole("spinbutton");
    rangeInputs = screen.getAllByRole("slider");
    petInput = screen.getByRole("checkbox");
    fileInput = screen.getByPlaceholderText("Photo");
    button = screen.getByRole("button");
  });

  test("All the components should have the user value", async () => {
    const plantsMockRepo = {} as unknown as PlantsApiRepo;
    userEvent.upload(
      fileInput,
      new File(["test"], "test.png", {
        type: "image/png",
      })
    );
    await userEvent.click(button);
    expect(usePlants(plantsMockRepo).addPlant).toHaveBeenCalledWith(
      {
        name: "test name",
        location: "indoor",
        height: "30",
        lightness: "3",
        humidity: "1",
        difficulty: "2",
        petFriendly: true,
      },
      new File(["test"], "test.png", {
        type: "image/png",
      })
    );
  });
});
