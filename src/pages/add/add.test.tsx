import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../core/store/store";
import Add from "./add";

describe("Given the add page", () => {
  render(
    <Provider store={store}>
      <Router>
        <Add />
      </Router>
    </Provider>
  );
  describe("When it is render", () => {
    test("Then it should render the add plant form", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});
