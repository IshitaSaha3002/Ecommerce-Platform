import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCxrpzSLdsTGG5htpXIpbDcqAY_6yVob4g",
    authDomain: "webtech-bfa5a.firebaseapp.com",
    databaseURL: "https://webtech-bfa5a-default-rtdb.firebaseio.com",
    projectId: "webtech-bfa5a",
    storageBucket: "webtech-bfa5a.appspot.com",
    messagingSenderId: "503228097907",
    appId: "1:503228097907:web:83ca67333183ce81691106"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
  
export { app, firestore, storage };
