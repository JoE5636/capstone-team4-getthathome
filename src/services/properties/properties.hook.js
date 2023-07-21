import { useState, useEffect } from "react";
import { fetchProperties } from "./properties.service";

export const useFetchProperties = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProperties();
      setState(data);
    })();
  }, []);

  return { data: state };
};
