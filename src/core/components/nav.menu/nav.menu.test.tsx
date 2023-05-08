/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { MenuOption } from "../header/header";
import { NavMenu } from "./nav.menu";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the nav component", () => {
  const mockOptions: MenuOption[] = [
    {
      img: "test",
      path: "test",
    },
    {
      img: "test2",
      path: "test2",
    },
  ];

  describe("When it is render", () => {
    test("Then it should print an unorder list", () => {
      render(
        <Router>
          <NavMenu options={mockOptions}></NavMenu>
        </Router>
      );

      const element = screen.getAllByRole("listitem");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
