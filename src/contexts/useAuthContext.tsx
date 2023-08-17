'use client'

// react imports
import React, { createContext, useReducer, useContext, useEffect } from "react";
// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
// types
import { authActions, authContextType, authState } from "@/types/context";


const AuthContext = createContext({} as authContextType)

const initialState = {
    user: null,
    authIsReady: false,
}

const authReducer = (state: authState, action: authActions) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, authIsReady: true, user: null };
        case "AUTH_IS_READY":
            return { ...state, user: action.payload, authIsReady: true };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "AUTH_IS_READY", payload: user });
            } else {
                dispatch({ type: 'LOGOUT' })
            }
        });
        return () => unSubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);