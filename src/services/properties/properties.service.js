import apiFetch from "../api-fetch";

export const fetchProperties = async () => {
  const data = await apiFetch("properties", { method: "GET" });

  return data;
};

export const fetchProperty = async (id) => {
  const data = await apiFetch(`properties/${id}`, { method: "GET" });

  return data;
};
