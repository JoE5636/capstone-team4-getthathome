import { tokenKey } from "../../config";
import apiFetch from "../api-fetch";

export async function login(credentials) {
  const { auth_token, ...user } = await apiFetch("login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, auth_token);

  // console.log(user);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });

  sessionStorage.removeItem(tokenKey);
}
