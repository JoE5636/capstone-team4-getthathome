import { BASE_URI } from "../config";

export default async function apiFetch(endpoint, { method, body } = {}) {
  // const token = sessionStorage.getItem(tokenKey);

  const config = {
    method: method || (body ? "POST" : "GET"),

    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
