/* eslint-disable import/no-duplicates */
import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCDHaUlPWEkdevL54CXbGb-WpazAu76ksY',
  authDomain: 'signal-clone-9ef72.firebaseapp.com',
  projectId: 'signal-clone-9ef72',
  storageBucket: 'signal-clone-9ef72.appspot.com',
  messagingSenderId: '720228195388',
  appId: '1:720228195388:web:d1a40422a4a458a5a77739',
}

let app

if (firebase.apps.length === 0) {
  app = firebase.default.initializeApp(firebaseConfig)
} else {
  app = firebase.default.app()
}

const db = app.firestore()
const auth = app.auth()

export { db, auth }
