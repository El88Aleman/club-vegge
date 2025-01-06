import {
  initializeApp,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmszuBN23FaF3hcez1K2mSz0nuYm2c0q8",
  authDomain: "club-vegge.firebaseapp.com",
  projectId: "club-vegge",
  storageBucket: "club-vegge.firebasestorage.app",
  messagingSenderId: "879209772776",
  appId: "1:879209772776:web:1ad14c1f1ed4c3f0b53b5d",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const onSigIn = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
