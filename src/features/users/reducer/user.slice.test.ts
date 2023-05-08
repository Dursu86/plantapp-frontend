import { PayloadAction } from "@reduxjs/toolkit";
import { UsersState, userReducer, LoginData } from "./user.slice";

const mockUser = {
  token: "test",
  user: "test",
} as unknown as LoginData;

const mockInitialState: UsersState = {
  userLogged: null,
};
const mockState: UsersState = {
  userLogged: null,
};
describe("Given the user slice", () => {
  describe("When we call the login method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<LoginData> = {
        type: "user/login",
        payload: mockUser,
      };
      const element = userReducer(mockInitialState, mockAction);
      expect(element.userLogged).toEqual(mockUser);
    });
  });
  describe("When we call the logout method", () => {
    test("Then it should change the state", () => {
      const mockAction: PayloadAction<UsersState> = {
        type: "user/logout",
        payload: mockState,
      };
      const element = userReducer(mockInitialState, mockAction);
      expect(element).toEqual(mockState);
    });
  });
});
