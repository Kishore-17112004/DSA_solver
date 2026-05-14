import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProgressState = {
  completedModules: string[];
};

const initialState: ProgressState = {
  completedModules: ["arrays", "stacks"],
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    completeModule: (state, action: PayloadAction<string>) => {
      if (!state.completedModules.includes(action.payload)) {
        state.completedModules.push(action.payload);
      }
    },
  },
});

export const { completeModule } = progressSlice.actions;
export const progressReducer = progressSlice.reducer;
