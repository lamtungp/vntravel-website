import { Button } from '@mui/material';
import React, { useEffect } from 'react';

import { requestFirebaseNotificationPermission } from '../../firebaseInit';

import AxiosInstance from 'src/common/axiosInstance';

const User = () => {
  const [requesting, setRequesting] = React.useState(false);

  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console
      console.log(firebaseToken);
    })
    .catch((err) => {
      return err;
    });

  React.useEffect(() => {
    setRequesting(true);
    AxiosInstance.get('/role/message').then((res) => {
      console.log(res.data.messages);
      setRequesting(false);
    });
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          AxiosInstance.post('/messages', { name: '1', message: 'hello' })
            .then((res) => {
              console.log(res.data.messages);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Click here
      </Button>
    </>
  );
};

export default User;
