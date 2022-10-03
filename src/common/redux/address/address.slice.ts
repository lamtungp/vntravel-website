import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type Address = {
  _id?: string;
  province?: string;
  city?: string;
  district?: string;
  wards?: string;
};

// declaring the types for our state
export type AddressState = {
  addressData: Address[];
};

const initialState: AddressState = {
  addressData: [],
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    getAddressData() {},
    setAddressData(state, action) {
      state.addressData = action.payload;
    },
  },
});

export const { getAddressData, setAddressData } = addressSlice.actions;

export const selectAddress = (state: RootState) => state.address.addressData;

export default addressSlice.reducer;
