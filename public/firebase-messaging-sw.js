importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js',
);

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

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png',
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log(event);
  return event;
});
