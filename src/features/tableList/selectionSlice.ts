import { createSlice } from '@reduxjs/toolkit';

const selectionSlice = createSlice({
    name: 'selection',
    initialState: {
        selectedIds: [],
    },
    reducers: {
        toggleSelection: (state, action) => {
            const id = action.payload;
            if (state.selectedIds.includes(id)) {
                state.selectedIds = state.selectedIds.filter((itemId) => itemId !== id);
            } else {
                state.selectedIds.push(id);
            }
        },
        clearSelection: (state) => {
            state.selectedIds = [];
        },
    },
});

export const { toggleSelection, clearSelection } = selectionSlice.actions;
export default selectionSlice.reducer;