import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD2dYIQXoXd4GydywdlyCLTDux7RndC6IA',
  authDomain: 'amaz-next.firebaseapp.com',
  projectId: 'amaz-next',
  storageBucket: 'amaz-next.appspot.com',
  messagingSenderId: '67216687074',
  appId: '1:67216687074:web:4e19c5d36224755e0d83bb',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
