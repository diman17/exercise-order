import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EXERCISE_THEMES } from "../../styles/constants";
import { generateRandomInteger } from "../../utils";

type MainState = {
    quantity: string;
    values: string;
    mode: string;
    isExerciseStarted: boolean;
    items: string[];
    theme: number;
    isModalShown: boolean;
    isSoundOn: boolean;
};

const initialState: MainState = {
    quantity: "2",
    values: "А",
    mode: "asc",
    isExerciseStarted: false,
    items: [],
    theme: 0,
    isModalShown: false,
    isSoundOn: false,
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
            state.isExerciseStarted = true;
        },
        finishExercise: (state) => {
            state.isExerciseStarted = false;
        },
        setItems: (state, action: PayloadAction<string[]>) => {
            state.items = action.payload;
        },
        setTheme: (state) => {
            state.theme = generateRandomInteger(0, EXERCISE_THEMES.length - 1);
        },
        showModal: (state) => {
            state.isModalShown = true;
        },
        hideModal: (state) => {
            state.isModalShown = false;
        },
        turnOnSound: (state) => {
            state.isSoundOn = true;
        },
        turnOffSound: (state) => {
            state.isSoundOn = false;
        },
    },
});

export const {
    setQuantityInStore,
    setValuesInStore,
    setModeInStore,
    startExercise,
    finishExercise,
    setItems,
    setTheme,
    showModal,
    hideModal,
    turnOnSound,
    turnOffSound,
} = mainSlice.actions;
export default mainSlice.reducer;
