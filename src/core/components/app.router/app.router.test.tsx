import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { AppRouter } from "./app.router";

describe("Given the app router component", () => {
  const prepareTestFunction = (number: number) => {
    render(
      <Provider store={store}>
        <Router
          initialEntries={[
            "/",
            "/login",
            "/register",
            "/plants",
            "/add",
            "/edit",
            "*",
          ]}
          initialIndex={number}
        >
          <AppRouter></AppRouter>
        </Router>
      </Provider>
    );
  };
  describe('When it is render and the path is "/"', () => {
    test("Then, a h1 should be in the document", async () => {
      prepareTestFunction(0);
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });

  describe('When it is render and the path is "/login"', () => {
    test("Then, two headings should be in the document", async () => {
      await waitFor(async () => prepareTestFunction(1));
      const element = await screen.findAllByRole("heading");
      expect(element.length).toBe(2);
    });
  });

  describe('When it is render and the path is "/register"', () => {
    test('Then, the "username" input should be in the document', async () => {
      await waitFor(async () => prepareTestFunction(2));
      const element = await screen.findAllByRole("heading");
      expect(element.length).toBe(2);
    });
  });
  describe('When it is render and the path is "/plants"', () => {
    test("Then, the title of plants should be in the document", async () => {
      await waitFor(async () => prepareTestFunction(3));
      const elements = await screen.findAllByRole("heading");
      expect(elements.length).toBe(1);
    });
  });
  describe('When it is render and the path is "/add"', () => {
    test("Then, the title of plants should be in the document", async () => {
      await waitFor(async () => prepareTestFunction(4));
      const elements = await screen.findAllByRole("heading");
      expect(elements.length).toBe(2);
    });
  });
  describe('When it is render and the path is "/edit"', () => {
    test("Then, the title of plants should be in the document", async () => {
      await waitFor(async () => prepareTestFunction(5));
      const elements = await screen.findAllByRole("heading");
      expect(elements.length).toBe(2);
    });
  });
});
