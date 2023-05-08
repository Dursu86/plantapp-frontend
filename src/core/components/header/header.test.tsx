import { render, screen } from "@testing-library/react";
import { Header, MenuOption } from "./header";
import { MemoryRouter as Router } from "react-router-dom";

const mockOptions = [
  { img: "test", path: "test" },
  { img: "test2", path: "test2" },
] as MenuOption[];

describe("Given the header component", () => {
  describe("When it is render", () => {
    test("Then it should print a heading", () => {
      render(
        <Router>
          <Header />
        </Router>
      );

      const element = screen.getByTestId("header");
      expect(element).toBeInTheDocument();
    });
  });
});
