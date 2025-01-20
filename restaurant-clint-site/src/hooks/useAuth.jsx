import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import AuthContext from "../provider/AuthContext";

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
