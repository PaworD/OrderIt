import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyDQc1pHhhNWW9sXXG_xjBDoP8zhq6i1dHQ",
      authDomain: "istiqlol-grant-7164d.firebaseapp.com",
      databaseURL: "https://istiqlol-grant-7164d.firebaseio.com",
      projectId: "istiqlol-grant-7164d",
      storageBucket: "istiqlol-grant-7164d.appspot.com",
      messagingSenderId: "507332560772",
      appId: "1:507332560772:web:b67c0e1b5adb4af4"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');
  export const cakesRef = db.ref('cakes');
