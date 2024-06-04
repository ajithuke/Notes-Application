import React, { useEffect, useState } from "react";
import { createContext, useContext } from 'react';
import App from "../App";

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4IFnMYYRmfb6dVXgzk2PZ2tZzKyrMH3I",
    authDomain: "notes-72efc.firebaseapp.com",
    projectId: "notes-72efc",
    storageBucket: "notes-72efc.appspot.com",
    messagingSenderId: "668645783795",
    appId: "1:668645783795:web:6090c46afa6e20f2041f86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleAuth = new GoogleAuthProvider(app);

const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext);

// Firebase Component

const FirebaseProvider = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            if (current) {
                setUser(current)
            }
            else {
                setUser(null)
            }
        })
    }, [])

    const signInUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then((user) => { console.log(user.user) })
    }

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuth);
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const addNote = async (title, note) => {
        return await addDoc(collection(firestore,"notes"),{
            title,
            note
        })
    }

    const getNotes = async ()=>{
        return await getDocs(collection(firestore,"notes"));
    }

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ signInUser, signUpUser, signInWithGoogle, signOutUser, addNote, getNotes, isLoggedIn }}>
            <App />
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider;