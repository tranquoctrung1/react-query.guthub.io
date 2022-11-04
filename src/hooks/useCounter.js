import { useQuery } from "react-query";

import client from "../client";

export const useCounter = (key, initialData) => [
  useQuery(key, () => initialData, {
    enabled: false,
    initialData: initialData,
  }).data,
  (value) => {
    client.setQueryData(key, value);
  },
];
