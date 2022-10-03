import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type Place = {
  _id?: string;
  name?: string;
  description?: string;
  rating?: number;
};

// declaring the types for our state
export type PlaceState = {
  placeData: Place[];

  searchPlace: {
    lo: string;
    dt: string;
  };
};

const initialState: PlaceState = {
  placeData: [],

  searchPlace: { lo: '', dt: '' },
};

export const placeSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    getPlaceData(state, action) {
      state.searchPlace = action.payload;
    },
    setPlaceData(state, action) {
      state.placeData = action.payload;
    },
  },
});

export const { getPlaceData, setPlaceData } = placeSlice.actions;

export const selectPlace = (state: RootState) => state.place.placeData;

export default placeSlice.reducer;
