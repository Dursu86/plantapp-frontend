/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { useUsers } from "../../../features/users/hooks/use.users";
import { UsersApiRepo } from "../../../features/users/services/users.api.repo";
import { LogUserForm } from "./user.forms";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("../../../features/users/hooks/use.users.tsx");

describe("Given LogUserForm component", () => {
  beforeEach(async () => {
    await act(async () => {
      (useUsers as jest.Mock).mockReturnValue({
        loginUser: jest.fn(),
      });
      render(
        <Provider store={store}>
          <Router>
            <LogUserForm></LogUserForm>
          </Router>
        </Provider>
      );
    });
  });

  describe("When the component is rendered", () => {
    test("Then the username <input> should be in the document", () => {
      const inputs = screen.getAllByRole("textbox");
      expect(inputs[0]).toBeInTheDocument();
    });

    test("Then the password <input> should be in the document", () => {
      const inputs = screen.getAllByRole("textbox");
      expect(inputs[1]).toBeInTheDocument();
    });

    test("Then the <button> should be in the document", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then, the handleSubmit function should be called", async () => {
      const usersMockRepo = {} as unknown as UsersApiRepo;
      const inputs = screen.getAllByRole("textbox");
      await userEvent.type(inputs[0], "test");
      await userEvent.type(inputs[1], "test");
      const button = screen.getByRole("button");
      await act(async () => {
        await userEvent.click(button);

        expect(useUsers(usersMockRepo).loginUser).toHaveBeenCalledWith({
          email: "test",
          passwd: "test",
        });
      });
    });
  });
});
