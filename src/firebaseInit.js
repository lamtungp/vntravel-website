import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCmdktUQmptL7cVlJxs_QT2GKsA7YyttH8',
  authDomain: 'summer-bond-323405.firebaseapp.com',
  projectId: 'summer-bond-323405',
  databaseURL: 'https://push-notifications-article.firebaseio.com',
  storageBucket: 'summer-bond-323405.appspot.com',
  messagingSenderId: '976811735361',
  appId: '1:976811735361:web:3d3d072d1638f9b9cac9c0',
  measurementId: 'G-0H9J8RMYT8',
};

firebase?.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
