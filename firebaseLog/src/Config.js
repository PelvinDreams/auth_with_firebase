import { initializeApp } from "firebase/app";
import  { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcOmzZqiHQx70k-CJ2jSuCtf70SZ_xUiA",
  authDomain: "fir-log-4039d.firebaseapp.com",
  projectId: "fir-log-4039d",
  storageBucket: "fir-log-4039d.firebasestorage.app",
  messagingSenderId: "428145914243",
  appId: "1:428145914243:web:15ce072190efa94d1d06b6",
  measurementId: "G-T4191BEE3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);


// HANDLE GOOGLE LOGIN
const handleGoogleLogin = async (setError) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In:', result.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Google Sign-In failed');
    }
}

// HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit = async (e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Login failed. Please check your credentials.');
    }
    e.target.reset(); // Reset the form fields after submission
}


export { auth, googleProvider, handleGoogleLogin, handleSubmit };
// export { app, auth, googleProvider, analytics };