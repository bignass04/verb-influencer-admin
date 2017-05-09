import firebase from 'firebase';
import { apiKey, projectId } from 'config'

// Initialize firebase connection
firebase.initializeApp({
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  storageBucket: `gs://${projectId}.appspot.com`
})

const database = firebase.database();

export default database;
