"use client";
import type { AuthContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from "firebase/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<any>(null);

  const [authError, setAuthError] = useState<string | null>(null);

	// create firebase user with email and password
	const createUser = (email: string, password: string) => {
		const auth = getAuth();

		try {
			const user = createUserWithEmailAndPassword(auth, email, password);

			if (user) {
				setUser(user);
			}

			return user;
		} catch (error) {
			console.log("Error creating user: " + error);
		}
	};

	const signInUser = (email: string, password: string) => {
		const auth = getAuth();

		try {
			const user = signInWithEmailAndPassword(auth, email, password);

			if (user) {
				setUser(user);
			}

			return user;
		} catch (error) {
			console.log("Error creating user: " + error);
		}
	};

	const signOutUser = () => {
		const auth = getAuth();

		try {
			signOut(auth);

			setUser(null);
		} catch (error) {
			console.log("Error signing out user: " + error);
		}
	};

	// user persistance
	const persistUser = () => {
		const auth = getAuth();
		return new Promise<any | null>((resolve, reject) => {
			// Return a Promise
			const unsubscribe = onAuthStateChanged(
				auth,
				(user) => {
					if (user) {
						setUser(user);
						resolve(user); // Resolve with the user object
					} else {
						setUser(null);
						resolve(null); // Resolve with null if no user
					}
					unsubscribe(); // Unsubscribe after getting the user
				},
				(error) => {
					reject(error); // Reject if there's an error
				}
			);
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				createUser,
				signInUser,
        signOutUser,
        persistUser,
        authError,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const authContext = React.useContext(AuthContext);
	if (!authContext) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return authContext;
};
