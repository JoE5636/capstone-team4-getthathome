import apiFetch from "../api-fetch";
import { tokenKey } from "../../config";
// aqui puedes llamar otros metodos

export async function getUser() {
  const { token, ...user } = await apiFetch("profile");

  // console.log(user);
  return user;
}

const credentials = {
  role: 1,
  name: "testino5",
  email: "test5@mail.com",
  phone: "123456789",
  password_digest: "qwerty",
};

export async function createUser(credentials) {
  const { token, ...user } = await apiFetch("users", { body: credentials });

  sessionStorage.setItem(tokenKey, token);

  console.log(user);

  return user;
}

// createUser(credentials);
