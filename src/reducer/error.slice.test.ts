import { PayloadAction } from "@reduxjs/toolkit";
import { errorReducer, ErrorState } from "./error.slice";

const mockError = "test error";

const mockInitialState: ErrorState = {
  message: null,
};

const mockFinalState: ErrorState = {
  message: "test error",
};

describe("Given the error slice", () => {
  describe("When we call the setError method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<string> = {
        type: "error/setError",
        payload: mockError,
      };
      const element = errorReducer(mockInitialState, mockAction);
      expect(element).toEqual(mockFinalState);
    });
  });
});
