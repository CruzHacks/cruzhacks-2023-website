import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"
import { registerToTopic } from "./utils/api"
import retry from "async/retry"

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY || ""
const REACT_APP_FIREBASE_AUTH_DOMAIN =
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || ""
const REACT_APP_PROJECTID = process.env.REACT_APP_PROJECTID || ""
const REACT_APP_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET || ""
const REACT_APP_MESSAGING_SENDERID =
  process.env.REACT_APP_MESSAGING_SENDERID || ""
const REACT_APP_APPID = process.env.REACT_APP_APPID || ""
const REACT_APP_MEASUREMENTID = process.env.REACT_APP_MEASUREMENTID || ""

/*const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID,
}*/
const firebaseConfig = {
}

export const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

const vapidKey = process.env.REACT_APP_FIREBASE_VAPID_KEY || ""

export const getTokenWrapper = (setNotificationEnabled, topic, authToken) => {
  getToken(messaging, { vapidKey: vapidKey })
    .then(currentToken => {
      if (currentToken) {
        setNotificationEnabled(true)
        retry(
          {
            times: 15,
            interval: retryCount => 50 * Math.pow(2, retryCount),
          },
          () => registerToTopic(currentToken, topic, authToken),
          (err, res) => {}
        )
      } else {
        setNotificationEnabled(false)
      }
    })
    .catch(err => {
      console.log(err)
    })
}
