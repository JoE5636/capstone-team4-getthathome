import apiFetch from "../api-fetch";
// aqui puedes llamar otros metodos

export const fetchProperties = async () => {
  const data = await apiFetch("properties", { method: "GET" });

  return data;
};