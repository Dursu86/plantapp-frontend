/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../core/store/store";
import Edit from "./edit";
beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Edit />
      </Router>
    </Provider>
  );
});

describe("Given the edit component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      const elements = screen.getAllByRole("heading");
      expect(elements.length).toBe(2);
    });
  });
});
