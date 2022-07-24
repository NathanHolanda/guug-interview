import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type Guest = {
    id: number;
    name: string;
    status: string;
};

type CheckedState = {
    guests: Guest[];
};

const initialState: CheckedState = {
    guests: [],
};

export const checkedSlice = createSlice({
    name: "checked",
    initialState,
    reducers: {
        addChecked: (state, action) => {
            state.guests.push(action.payload);
        },
    },
});

export default checkedSlice.reducer;

export const selectChecked = (state: RootState): CheckedState => state.checked;
