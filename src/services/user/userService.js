import apiFetch from "../api-fetch";
import { tokenKey } from "../../config";
// aqui puedes llamar otros metodos

export async function getUser() {
  const { token, ...user } = await apiFetch("profile");

  // console.log(user);
  return user;
}
