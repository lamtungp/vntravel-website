import { call, put } from 'redux-saga/effects';

import { getListAddress } from './address.services';
import { setAddressData } from './address.slice';

import {
  setAlertState,
  setErrorMessage,
} from '@/common/redux/common/common.slice';

export function* getAddressSaga(): any {
  try {
    const data = yield call(getListAddress);
    yield put(setAddressData(data));
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
