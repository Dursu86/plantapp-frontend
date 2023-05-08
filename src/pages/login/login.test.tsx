/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../core/store/store";
import LoginPage from "./login";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the login page", () => {
  describe("When it is render", () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <Router>
            <LoginPage />
          </Router>
        </Provider>
      );
    });

    test("Then it should print three headings", () => {
      const elements = screen.getAllByRole("heading");

      expect(elements.length).toBe(2);
    });
  });
});
