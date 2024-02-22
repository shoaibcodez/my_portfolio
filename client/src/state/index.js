import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    viewportSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setViewportSize: (state, action) => {
            state.viewportSize = action.payload;
        },
    },
});

export const { setMode, setViewportSize } = appSlice.actions;
export default appSlice.reducer;
