import  { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword }from "firebase/auth"
import app from '../firebase/firebase.config';

const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true)
    const [user,setUser]=useState(null)


    const createUser =(email,password)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        setLoader(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

   useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return()=>{
            return unsubscribe();
        }
   },[])

    const authInfo={
        user,
        loader,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export  {AuthProvider,AuthContext};