import React from 'react';
import './style.css';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBsnJC7GiPEYl_jMGMHGVYQLgIbM4ZJgUw',
  authDomain: 'resume-builder-d97c5.firebaseapp.com',
  projectId: 'resume-builder-d97c5',
  storageBucket: 'resume-builder-d97c5.appspot.com',
  messagingSenderId: '916028111750',
  appId: '1:916028111750:web:d4cfc8751aa78323f08a07',
  measurementId: 'G-3NRGHM4XM3',
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const email = React.createRef();
  const password = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  function handleSignup() {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert('user created success');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert('unsucess');
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }
  function handleSignIn(){
    const auth = getAuth();
signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("user signed up")
  })
  .catch((error) => {
    const errorCode = error.code;
    alert("signup error")
    const errorMessage = error.message;
  });
  }
  return (
    <>
      <div>
        <h3>SignIn</h3>
        <input type="text" ref={emailRef} />
        <br />
        <input type="text" ref={passwordRef} />
        <br />
        <button onClick={handleSignIn}>SignIn</button>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <h3>SignUp</h3>
        <input type="text" ref={email} />
        <br />
        <input type="text" ref={password} />
        <br />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </>
  );
}
