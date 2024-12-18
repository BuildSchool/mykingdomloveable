import { useAuthState } from "@/hooks/useAuthState";
import { AuthUI } from "./AuthUI";

export const LoginForm = () => {
  useAuthState();
  return <AuthUI />;
};