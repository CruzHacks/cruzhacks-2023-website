import { initializeApp } from "firebase/app"
import { getMessaging, getToken } from "firebase/messaging"
import { registerToTopic } from "./api"
import async from "async"
const vapidKey = process.env.REACT_APP_FIREBASE_VAPID_KEY || ""
const config = process.env.REACT_APP_FIREBASE_CONFIG || ""
const firebaseConfig = JSON.parse(config)
export const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

export const getTokenWrapper = (
  setNotificationEnabled: any,
  topic: any,
  authToken: any
) => {
  getToken(messaging, { vapidKey: vapidKey })
    .then(currentToken => {
      if (currentToken) {
        setNotificationEnabled(true)
        async.retry(
          {
            times: 15,
            interval: (retryCount: number) => 50 * Math.pow(2, retryCount),
          },
          () => registerToTopic(currentToken, topic, authToken),
          () => {}
        )
      } else {
        setNotificationEnabled(false)
      }
    })
    .catch(err => {
      console.log(err)
    })
}
