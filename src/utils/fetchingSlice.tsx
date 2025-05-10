import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchingState } from './fetchingInterface';

export function createFetchingSlice<T>(name: string) {
  const initialState: FetchingState<T> = {
    items: [],
    status: 'idle',
    error: null,
  };

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetchStart(state) {
        state.status = 'loading';
      },
      fetchSuccess(state, action: PayloadAction<T[]>) {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      },
      fetchFailure(state, action: PayloadAction<string>) {
        state.status = 'failed';
        state.error = action.payload;
      },
    },
  });

  return slice;
}
