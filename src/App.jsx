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
