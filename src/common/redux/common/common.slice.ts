import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// declaring the types for our state
export type CommonState = {
  alertState: {
    open: boolean;
    message: string;
    severity: AlertColor;
    color?: string;
  };

  errorState: {
    message: string;
    code?: number;
  };

  themeState: {
    isOpen: Array<any>;
    mode: 'light' | 'dark';
    opened: boolean;
  };
};

const initialState: CommonState = {
  alertState: {
    open: false,
    message: '',
    severity: 'success',
  },
  errorState: {
    message: '',
  },
  themeState: {
    isOpen: [], //for active default menu
    mode: 'light',
    opened: true,
  },
};

export const alertSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setAlertState(state, action) {
      state.alertState = action.payload;
    },

    setErrorMessage(state, action) {
      state.errorState = action.payload;
    },

    setThemeState(state, action) {
      state.themeState = action.payload;
    },
  },
});

export const { setAlertState, setErrorMessage, setThemeState } =
  alertSlice.actions;

export const selectAlertState = (state: RootState) => state.common.alertState;

export const selectErrorMessage = (state: RootState) => state.common.errorState;

export const selectThemeState = (state: RootState) => state.common.themeState;

export default alertSlice.reducer;