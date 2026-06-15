import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { doc, onSnapshot } from "firebase/firestore"
import { auth, db } from "../firebase/config"

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let unsubscribeProfile = () => {};

        const unsubscribeAuth = onAuthStateChanged(auth, (maybeFirebaseUser) => {
            
            unsubscribeProfile();

            if (!maybeFirebaseUser) {
                setUser(null);
                setIsLoading(false);
                return;
            }

            const profileRef = doc(db, "users", maybeFirebaseUser.uid);
            
            unsubscribeProfile = onSnapshot(profileRef, (snapshot) => {

                const profileData = snapshot.exists() ? snapshot.data() : {};

                setUser({
                    uid: maybeFirebaseUser.uid,
                    email: maybeFirebaseUser.email,
                    displayName: maybeFirebaseUser.displayName,
                    ...profileData, 
                });

                setIsLoading(false);
            });
        });

        return () => {
            unsubscribeAuth();
            unsubscribeProfile();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
