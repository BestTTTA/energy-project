import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseAuth from "./auth";

const signInWithGoogle = async () => {
    try {
        const auth = firebaseAuth;
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;

    } catch (error) {
        console.error("Error signing in with Google:", error);
        return null;
    }
};

export default signInWithGoogle;
