import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MainState = {
    quantity: string;
    values: string;
    mode: string;
    isExerciseStart: boolean;
    items: string[];
};

const initialState: MainState = {
    quantity: "2",
    values: "А",
    mode: "asc",
    isExerciseStart: false,
    items: [],
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
    },
});

export const { setQuantityInStore, setValuesInStore, setModeInStore, startExercise, setItems } =
    mainSlice.actions;
export default mainSlice.reducer;
