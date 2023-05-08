import { createSlice } from "@reduxjs/toolkit";

export type ErrorState = {
  message: string | null;
};

export const initialState: ErrorState = {
  message: null,
};

export const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setError } = slice.actions;
export const errorReducer = slice.reducer;
