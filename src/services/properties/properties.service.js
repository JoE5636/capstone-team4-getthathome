import apiFetch from "../api-fetch";

export const fetchProperties = async () => {
  const data = await apiFetch("properties", { method: "GET" });

  console.log(data);

  return data;
};
export async function createProperty(formData) {
  const data = await apiFetch("props", {
    // method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: { token },
    // },
    body: formData,
  });
  console.log(data);

  return data;
}

export async function showProperty(id) {
  const data = await apiFetch(`/properties/${id}`);

  //   console.log(data);
  return data;
}
