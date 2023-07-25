import apiFetch from "../api-fetch";

export async function showFavorite(id, body) {
  const data = await apiFetch(`/properties/${id}`, { method: "PATCH", body });
  console.log(await data);
  //return data;
}
