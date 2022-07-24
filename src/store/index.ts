import { configureStore } from "@reduxjs/toolkit";
import refusedReducers, { refusedSlice } from "./slices/refusedSlice";
import acceptedReducers, { acceptedSlice } from "./slices/acceptedSlice";
import checkedReducers, { checkedSlice } from "./slices/checkedSlice";
import searchReducers, { searchSlice } from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        refused: refusedReducers,
        accepted: acceptedReducers,
        checked: checkedReducers,
        search: searchReducers,
    },
});

export const storeActions = {
    ...refusedSlice.actions,
    ...acceptedSlice.actions,
    ...checkedSlice.actions,
    ...searchSlice.actions,
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
