import apiFetch from "../api-fetch";
// aqui puedes llamar otros metodos

export const fetchProperties = async () => {
  const data = await apiFetch("properties", { method: "GET" });

  return data;
};

export async function createProperty(formData) {
  const data = await apiFetch("props", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "4167c8114b3ffe99dc1aa8c6be97199e",
    },
    body: formData,
  });
  console.log(data);

  return data;
}
