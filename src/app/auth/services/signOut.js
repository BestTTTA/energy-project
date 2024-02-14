import { signOut } from "firebase/auth";
import firebaseAuth from "./auth";

const signOutUser = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export default signOutUser;
