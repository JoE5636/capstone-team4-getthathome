import apiFetch from "../api-fetch";
import { tokenKey } from "../../config";

// const credentials = {
//   role: 1,
//   name: "testino5",
//   email: "test5@mail.com",
//   phone: "123456789",
//   password_digest: "qwerty",
// };

export async function createUser(credentials) {
  const { auth_token, ...user } = await apiFetch("users", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, auth_token);

  // console.log(user);

  return user;
}

export async function getUser() {
  const { token, ...user } = await apiFetch("profile");

  // console.log(user);
  return user;
}

// createUser(credentials);
