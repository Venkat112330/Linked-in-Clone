import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWsRazex1o_1p0mv7aoKWV-WNQ_2_9Q38",
  authDomain: "my-first-app-63cb9.firebaseapp.com",
  projectId: "my-first-app-63cb9",
  storageBucket: "my-first-app-63cb9.appspot.com",
  messagingSenderId: "486262701010",
  appId: "1:486262701010:web:bdde134b6bd9cbc6cce60b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = firebase.initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth =firebase.getAuth(app);

// // Initialize Firestore and get a reference to the service
// const db = getFirestore(app);

export {db,auth};
