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
import './App.css';

import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from './firebase/firebase.init';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(res => console.log(res.user))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
```
