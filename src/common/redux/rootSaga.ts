import { all, takeEvery, takeLeading } from 'redux-saga/effects';

import { logoutSaga, signinSaga, signupSaga } from './auth/auth.saga';
import { logout, setSigninData, setSignupData } from './auth/auth.slice';
import { getUserProfile } from './user/user.slice';
import { getMeSaga } from './user/user.saga';
import { getAddressData } from './address/address.slice';
import { getAddressSaga } from './address/address.saga';

export default function* rootSaga() {
  // auth
  yield all([
    takeEvery(setSigninData.type, signinSaga),
    takeEvery(setSignupData.type, signupSaga),
    takeEvery(logout.type, logoutSaga),
  ]);

  // user
  yield all([takeLeading(getUserProfile.type, getMeSaga)]);

  // address
  yield all([takeLeading(getAddressData.type, getAddressSaga)]);
}
