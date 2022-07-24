import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type Guest = {
    id: number;
    name: string;
    status: "APPROVE";
};

type AcceptedState = {
    guests: Guest[];
};

const initialState: AcceptedState = {
    guests: [],
};

export const acceptedSlice = createSlice({
    name: "accepted",
    initialState,
    reducers: {
        addAccepted: (state, action) => {
            state.guests.push(action.payload);
        },
    },
});

export default acceptedSlice.reducer;

export const selectAccepted = (state: RootState): AcceptedState =>
    state.accepted;
