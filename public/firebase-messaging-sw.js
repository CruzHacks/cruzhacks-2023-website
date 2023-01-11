// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');

/* UNCOMMENT THE LINE BELOW FOR LOCAL DEVELOPMENT USES */
importScripts('/__/firebase/init.js?useEmulator=true');

/* COMMENT THE LINE BELOW FOR LOCAL DEVELOPMENT */
//importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  if (payload && payload.notification && payload.notification.title && payload.notification.body) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  }
});