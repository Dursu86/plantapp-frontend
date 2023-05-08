/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from "@testing-library/react";
import Home from "./home";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
describe("Given the home component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  describe("When it is render", () => {
    test("It should print two buttons", () => {
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(2);
    });
  });
  describe("When the user click the login button", () => {
    test("It should go to login page", async () => {
      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);
      await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/login"));
    });
  });
  describe("When the user click the register button", () => {
    test("It should go to register page", async () => {
      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[1]);
      await waitFor(() =>
        expect(mockNavigate).toHaveBeenCalledWith("/register")
      );
    });
  });
});
