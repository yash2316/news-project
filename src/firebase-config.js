
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {

    apiKey: "AIzaSyC6GCCnb-gRr7znSO-Fgk16e9OhJXQNBn4",
    authDomain: "testapi-eb5d7.firebaseapp.com",
    projectId: "testapi-eb5d7",
    storageBucket: "testapi-eb5d7.appspot.com",
    messagingSenderId: "744558352301",
    appId: "1:744558352301:web:85aa7e4271d696542df324"

};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
