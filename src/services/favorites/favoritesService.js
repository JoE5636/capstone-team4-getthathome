import apiFetch from "../api-fetch";

export async function changeFavorite(id, body) {
  const data = await apiFetch(`props/${id}`, { method: "PATCH", body });
  console.log(await data);
  //return data;
}

export const fetchFavorites = async () => {
  const data = await apiFetch("props", { method: "GET" });

  console.log(data);

  return data;
};
