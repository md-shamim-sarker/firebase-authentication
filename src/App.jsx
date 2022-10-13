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