import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Girl from "../../assets/girl.png";
import Google from "../../assets/google.png";
import "./index.css";

function Signup({ type }) {
  const history = useHistory();
  const provider = new GoogleAuthProvider();
  console.log(type);
  const signIn = () => {
    console.log("Sign In");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result,'result');
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "token", token);
        if (type === "client") {
          history.push("/onboarding/client");
        } else {
          history.push("/onboarding/candidate");
        }
        // ...
      })
      .catch((error) => {
        alert("error");
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="container">
      <div className="buttonSide">
        <div className="fontSide">
          <h1>Welcome Client</h1>
          <h3>Sign In</h3>
        </div>

      <button onClick={signIn}><img src={Google} alt="goog"/></button>
      </div>
      <img src={Girl} alt="girl"/>
    </div>
  );
}

export default Signup;
