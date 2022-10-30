import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EXERCISE_THEMES } from "../../styles/constants";
import { generateRandomInteger } from "../../utils";

type MainState = {
    quantity: string;
    values: string;
    mode: string;
    isExerciseStart: boolean;
    items: string[];
    theme: number;
};

const initialState: MainState = {
    quantity: "2",
    values: "А",
    mode: "asc",
    isExerciseStart: false,
    items: [],
    theme: 0,
};

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setQuantityInStore: (state, action: PayloadAction<string>) => {
            state.quantity = action.payload;
        },
        setValuesInStore: (state, action: PayloadAction<string>) => {
            state.values = action.payload;
        },
        setModeInStore: (state, action: PayloadAction<string>) => {
            state.mode = action.payload;
        },
        startExercise: (state) => {
            state.isExerciseStart = true;
        },
        setItems: (state, action: PayloadAction<string[]>) => {
            state.items = action.payload;
        },
        setTheme: (state) => {
            state.theme = generateRandomInteger(0, EXERCISE_THEMES.length - 1);
        },
    },
});

export const {
    setQuantityInStore,
    setValuesInStore,
    setModeInStore,
    startExercise,
    setItems,
    setTheme,
} = mainSlice.actions;
export default mainSlice.reducer;
