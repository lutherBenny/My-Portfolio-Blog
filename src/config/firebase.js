
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDmRYFacftfhrqXNUJsL6ctrNLsBeGZmMQ",
  authDomain: "blog-app-emc-f7082.firebaseapp.com",
  projectId: "blog-app-emc-f7082",
  storageBucket: "blog-app-emc-f7082.appspot.com",
  messagingSenderId: "934192326710",
  appId: "1:934192326710:web:f186a09ebf4964d4395097",
  measurementId: "G-2RYW6B90FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth
