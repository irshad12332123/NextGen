import { useApiContext } from "@/providers/ApiContext";
import { jwtDecode } from "jwt-decode";

export function decodeToken() {
  const { token } = useApiContext();
  const decoded = jwtDecode(token);
  console.log(decoded);

  return decoded;
}
