import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type Guest = {
    id: number;
    name: string;
    status: "REFUSED";
};

type RefusedState = {
    guests: Guest[];
};

const initialState: RefusedState = {
    guests: [],
};

export const refusedSlice = createSlice({
    name: "refused",
    initialState,
    reducers: {
        addRefused: (state, action) => {
            state.guests.push(action.payload);
        },
    },
});

export default refusedSlice.reducer;

export const selectRefused = (state: RootState): RefusedState => state.refused;
