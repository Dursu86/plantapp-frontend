import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../features/users/reducer/user.slice";
import { errorReducer } from "../../reducer/error.slice";
import { plantsReducer } from "../../features/plants/reducer/plant.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    plants: plantsReducer,
    errors: errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
