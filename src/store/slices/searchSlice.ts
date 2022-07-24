import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type SearchState = {
    value: string;
};

const initialState: SearchState = {
    value: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default searchSlice.reducer;

export const selectSearch = (state: RootState) => state.search.value;
