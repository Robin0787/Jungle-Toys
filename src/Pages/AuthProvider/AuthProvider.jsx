
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../FIrebase/Firebase.init";
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signUpWithEmailAndPass =(email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth ,email, password);
    }

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }
    const passReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    const info = {signUpWithEmailAndPass, logInWithEmailAndPass, continueWithGoogle, continueWithGithub, logOut, loading, user, passReset};
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;