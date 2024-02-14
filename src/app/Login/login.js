import signInWithGoogle from "../auth/services/signInWithGoogle";
import { useRouter } from "next/navigation";

const useCustomHook = () => {
  const router = useRouter();
  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        router.push("/Home");
        localStorage.setItem("userImage", result.user.photoURL || "");
        localStorage.setItem("userName", result.user.displayName || "");
        localStorage.setItem("userEmail", result.user.email || "");
      } else {
        console.log("No user data available");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};

export default useCustomHook;
