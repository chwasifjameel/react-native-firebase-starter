import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBDObb63MMVGhX6VYcHXklEcOe3EeyJH8M',
  authDomain: 'myfypp-27058.firebaseapp.com',
  databaseURL: 'https://myfypp-27058.firebaseio.com',
  projectId: 'myfypp-27058',
  storageBucket: 'myfypp-27058.appspot.com',
  messagingSenderId: '29166547300',
  appId: '1:29166547300:web:07ad69b2d6e0f4de42ca71',
  measurementId: 'G-W8CT2GYY6M',
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
