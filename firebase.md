# Firebase
## Firebase Authentication

### Steps
1. https://console.firebase.google.com/
2. Create a project
3. Web (</>)
4. Register app
5. Build > Authentication > Get Started > Sign-in method > Enable Google
6. Add Firebase SDK
7. Copy paste firebase configuration to src/firebase/firebase.init.js
```js
// These code are different for other application
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
```
8. Add this line "export default app;" at the last of firebase.init.js file
9.  Go to docs
10. Build > Authentication > Web > Get Started (Copy paste to App.jsx)
```js
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import app from './firebase/firebase.init';
import {useState} from 'react';

function App() {
  const [user, setUser] = useState({});

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(error => {
        console.error("Error: ", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    }).catch((error) => {
      setUser({});
    });
  };


  return (
    <div>
      {
        user.uid
          ? <button onClick={handleGoogleSignOut}>Google Sign Out</button>
          : <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }

      {
        user.uid &&
        <div>
          <h2>Name: {user.displayName}</h2>
          <h3>Email: {user.email}</h3>
          <img src={user.photoURL} alt="img_photo" />
        </div>
      }
    </div>
  );
}

export default App;
```
