import { createSlice } from "@reduxjs/toolkit";
import { Plant, PlantInTheList } from "../models/plant.model";

export type PlantsState = {
  plantList: PlantInTheList[];
  actualPlant: Plant | null;
};

export const initialState: PlantsState = {
  plantList: [],
  actualPlant: null,
};

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    changePlantList(state, action) {
      const strPLantList = state.plantList.map((e) => JSON.stringify(e));
      state.plantList = [
        ...state.plantList,
        ...action.payload.filter(
          (e: PlantInTheList) => !strPLantList.includes(JSON.stringify(e))
        ),
      ];
    },
    changePlant(state, action) {
      state.actualPlant = action.payload;
    },
    deletePlant(state, action) {
      state.plantList = state.plantList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { changePlantList, changePlant, deletePlant } = plantSlice.actions;
export const plantsReducer = plantSlice.reducer;
