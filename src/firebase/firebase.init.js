import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAqVVDZwrDZpO3tn7aZDitxyLYpZMV3ACk",
    authDomain: "fir-authentication-d7b66.firebaseapp.com",
    projectId: "fir-authentication-d7b66",
    storageBucket: "fir-authentication-d7b66.appspot.com",
    messagingSenderId: "105987754781",
    appId: "1:105987754781:web:87dc10ff3b0f889058aff4"
};

const app = initializeApp(firebaseConfig);

export default app;