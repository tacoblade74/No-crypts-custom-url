import { createSlice } from "@reduxjs/toolkit";

export const linksSlice = createSlice({
    name: "Links",
    initialState: {
        selectedLinks: []
    },
    reducers: {
        addLink: (state, action) => {
            state.selectedLinks.push(action.payload);
        },
        removeLink: (state, action) => {
            // Filter out the link specified in action.payload
            state.selectedLinks = state.selectedLinks.filter(link => link !== action.payload);
        },
    }
})
export const { addLink, removeLink } = linksSlice.actions;
export default linksSlice.reducer;