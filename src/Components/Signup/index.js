import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
import "./signIn.css";
import { ReactComponent as Google } from "./Google.svg";

function Signup({ type }) {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  console.log(type);
  const signIn = () => {
    console.log("Sign In");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result, "result");
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "token", token);
        if (type === "client") {
          navigate("/onboarding/client");
        } else {
          navigate("/onboarding/candidate");
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
      <div className="card">
        <h1>Sign Up</h1>
        <div className="signIn-btn">
          <button onClick={signIn}>
            <Google />
            <h3>Signup</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
