/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { useUsers } from "./use.users";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { User } from "../models/user.model";
import { UsersApiRepo } from "../services/users.api.repo";
import { store } from "../../../core/store/store";

describe("Given the useUsers Custom Hook, a UserApiRepo mock and a TestComponent", () => {
  let mockPayload: User;
  let mockRepo: UsersApiRepo;

  mockPayload = {
    username: "test",
    email: "test",
  } as unknown as User;

  mockRepo = {
    registerUserRepo: jest.fn(),
    loginUserRepo: jest.fn(),
  } as unknown as UsersApiRepo;

  beforeEach(async () => {
    const TestComponent = function () {
      const { register, loginUser } = useUsers(mockRepo);

      return (
        <>
          <button onClick={() => register(mockPayload)}>register</button>
          <button onClick={() => loginUser(mockPayload)}>login</button>
        </>
      );
    };

    await act(async () =>
      render(
        <Provider store={store}>
          <TestComponent></TestComponent>
        </Provider>
      )
    );
  });

  describe("When the TestComponent is rendered", () => {
    test("Then, the button should be in the document", async () => {
      const elements = await screen.findAllByRole("button");
      expect(elements[0]).toBeInTheDocument();
    });
  });

  describe("When the TestComponent is rendered and the register button is clicked", () => {
    test("Then, the registerUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      expect(mockRepo.registerUserRepo).toHaveBeenCalled();
    });
    test("If the repo throw an error, the setError should be called", async () => {
      (mockRepo.registerUserRepo as jest.Mock).mockRejectedValue(
        new Error("test")
      );
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[0]));
      const result = store.getState().errors.message;
      expect(result).toBe("test");
    });
  });

  describe("When the TestComponent is rendered and the login button is clicked", () => {
    test("Then, the loginUser function should be called", async () => {
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      expect(mockRepo.loginUserRepo).toHaveBeenCalled();
    });
    test("If the repo throw an error, the setError should be called", async () => {
      (mockRepo.loginUserRepo as jest.Mock).mockRejectedValue(
        new Error("test")
      );
      const elements = await screen.findAllByRole("button");
      await act(async () => userEvent.click(elements[1]));
      const result = store.getState().errors.message;
      expect(result).toBe("test");
    });
  });
});
