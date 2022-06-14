import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDird5yQ3tTztSyX3_UifP8XvQnwKQlAI0",
    authDomain: "restorantapp-c7105.firebaseapp.com",
    databaseURL: "https://restorantapp-c7105-default-rtdb.firebaseio.com",
    projectId: "restorantapp-c7105",
    storageBucket: "restorantapp-c7105.appspot.com",
    messagingSenderId: "88834883728",
    appId: "1:88834883728:web:2e6e6a539a7b6fa2bd9815"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
