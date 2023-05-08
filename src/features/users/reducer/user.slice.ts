import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user.model";

export type UsersState = {
  userLogged: {
    token: string;
    user: User;
  } | null;
};

export const initialState: UsersState = {
  userLogged: null,
};

export type LoginData = {
  token: string;
  user: User;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userLogged = {
        token: action.payload.token,
        user: action.payload.user,
      };
    },
    logout(state) {
      state.userLogged = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
