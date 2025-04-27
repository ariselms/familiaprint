"use client";
import type { AuthContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<any>(null);

  const router = useRouter();

	const signOutUser = async () => {
    const request = await fetch(`/api/auth/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response = await request.json();

    if (response.success) {
      setUser(null);
      router.push("/login");
    }
	};

	// user persistance
	const persistUser = async () => {

    const request = await fetch(`/api/auth/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const response = await request.json();

    if (response.success) {
      setUser(response.data);
    } else {
      console.error(response.message);
      router.push("/login");
    }
	};

	return (
		<AuthContext.Provider
			value={{
				user,
        signOutUser,
        persistUser
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	const authContext = React.useContext(AuthContext);
	if (!authContext) {
		throw new Error("useAuthContext must be used within a useAuthContext Provider");
	}
	return authContext;
};
