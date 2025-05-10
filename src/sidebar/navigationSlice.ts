import { createAppSlice } from "../app/createAppSlice"

const initialState = {
    selectedNavItem: 0, // Default selected item index
};

export const navigationSlice = createAppSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setSelectedNavItem: (state, action) => {
            state.selectedNavItem = action.payload;
        },
    },
});

export const { setSelectedNavItem } = navigationSlice.actions;
export default navigationSlice.reducer;