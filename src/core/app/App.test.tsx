import { render } from "@testing-library/react";
import App from "./App";
import { AppRouter } from "../components/app.router/app.router";

jest.mock("../components/app.router/app.router.tsx");
describe("Given the App component", () => {
  describe("When it is render", () => {
    test("Then it should call app router", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act

      render(<App></App>);

      expect(AppRouter).toHaveBeenCalled();
    });
  });
});
