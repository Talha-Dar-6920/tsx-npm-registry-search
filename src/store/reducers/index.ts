import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPackages } from './thunks';
import { InitialStateInterface } from '../interfaces';

const initialState: InitialStateInterface = {
  search: '',
  loading: false,
  data: [],
  error: undefined,
};

export const mainSlice = createSlice({
  name: 'stateReducer',
  initialState,
  reducers: {
    SearchTerm: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
        state.error = undefined;
        state.data = [];
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export * from './thunks';

export const { SearchTerm } = mainSlice.actions;

export default mainSlice.reducer;
