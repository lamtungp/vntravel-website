import { call, put } from 'redux-saga/effects';

import { getListPlace } from './place.services';
import { setPlaceData } from './place.slice';

import {
  setAlertState,
  setErrorMessage,
} from '@/common/redux/common/common.slice';

export function* getPlaceSaga(action: any): any {
  try {
    const data = yield call(getListPlace, action.payload);
    yield put(setPlaceData(data));
  } catch (error: any) {
    yield put(setErrorMessage({ message: error.message }));
    yield put(
      setAlertState({
        open: true,
        message: error.message,
        severity: 'error',
      }),
    );
  }
}
